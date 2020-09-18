<?php

namespace App\Listeners;

use App\Actions\StoreMetrics;
use App\Models\Client;
use App\Models\Schema;
use Illuminate\Support\Facades\Auth;
use Nuwave\Lighthouse\Events\ManipulateResult;

class ManipulateResultListener
{
    public function handle(ManipulateResult $result)
    {
        // Ignore introspection requests.
        if ($this->isIntrospectionRequest($result)) {
            return;
        }

        $client = $this->getClient();
        $schema = Schema::first();
        $request = request()->json()->all();
        $tracing = $this->getTracing($result);

        StoreMetrics::dispatchAfterResponse($client, $schema, $request, $tracing);
    }

    private function isIntrospectionRequest($result)
    {
        $resolvers = $this->getTracing($result)['execution']['resolvers'];

        return count($resolvers) == 0;
    }

    private function getTracing($result)
    {
        return $result->result->extensions['tracing'];
    }

    private function getClient()
    {
        $user = Auth::user();

        // If not authenticated return anonymous user
        if (!$user) {
            return Client::first();
        }

        $identifer = config('lighthouse-dashboard.client_identifier');

        return Client::firstOrCreate(['username' => $user->$identifer]);
    }
}
