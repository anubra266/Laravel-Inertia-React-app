<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The attributes that should be appended to model instnces.
     * * Relationships can also be appended like  Eager loading
     * @var array
     */
    protected $appends = ['full_name'];

    /**
     * Model attribute accessor
     * * Needs $appends to be added to instances
     */
    public function getFullNameAttribute()
    {
        return $this->attributes['full_name'] = "{$this->first_name} {$this->last_name}";
    }

    /**
     * Model attribute mutator
     */
    public function setLastNameAttribute($value)
    {
        $this->attributes['last_name'] = ucfirst($value);
    }
}
