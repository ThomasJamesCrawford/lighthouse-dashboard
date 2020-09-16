<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FieldsOperations extends Model
{
    use HasFactory;

    protected $table = 'ld_fields_operations';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function field(): BelongsTo
    {
        return $this->belongsTo(Field::class);
    }

    public function operation(): BelongsTo
    {
        return $this->belongsTo(Operation::class);
    }
}
