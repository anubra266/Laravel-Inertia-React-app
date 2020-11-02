<?php


namespace App\Helpers\Inertia;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Session;

class InertiaContainer
{
    public const MAIN_CONTAINER = 'inertia';
    public const MODALS_KEY = 'modals';

    public const CONTAINERS = [
        self::MODALS_KEY,
    ];

    public $session = true;

    /**
     * @param  string  $key
     * @param $data
     * @return InertiaContainer
     */
    public function set(string $key, $data): InertiaContainer
    {
        $this->___set($key, $data, false);
        return $this;
    }

    /**
     * @param $data
     * @return InertiaContainer
     */
    public function fromArray(array $data): InertiaContainer
    {
        foreach($data as $key => $value){
            $this->___set($key, $value, false);
        }
        return $this;
    }

    /**
     * @param  string  $key
     * @param $data
     * @return InertiaContainer
     */
    public function append(string $key, $data): InertiaContainer
    {
        $this->___set($key, $data, true);
        return $this;
    }

    /**
     * @param  string  $key
     * @param $data
     * @param  false  $append
     * @return $this
     */
    protected function ___set(string $key, $data, $append = false): InertiaContainer
    {
        $original = Session::get(self::MAIN_CONTAINER, []);
        if (Arr::has($original, $key)) {
            Arr::set(
                $original,
                $key,
                array_merge(Arr::get($original, $key, []), $append ? [$data] : $data)
            );
        } else {
            $original = Arr::add($original, $key, $append ? [$data] : $data);
        }

        // TODO : Only apply if NOT session
        \Inertia\Inertia::share($original);
        $this->session && Session::put(self::MAIN_CONTAINER, $original);
        return $this;
    }


    /**
     * @param  string|array  $key
     * @param  bool  $deep
     * @return InertiaContainer
     */
    public function remove($key,$deep = true): InertiaContainer
    {
        $current = Session::get(self::MAIN_CONTAINER, []);

        Arr::forget($current, $key); // Pull from the stack
        $deep && \Inertia\Inertia::pull($key); // Pull from shared just in case

        $this->session && Session::put(self::MAIN_CONTAINER, $current);
        // TODO We need to update here to also match the non-session stuff or either pull
        return $this;
    }

    /**
     * @return $this
     */
    public function withSession(): InertiaContainer
    {
        $this->session = true;
        return $this;
    }

    /**
     * @return $this
     */
    public function withoutSession(): InertiaContainer
    {
        $this->session = false;
        return $this;
    }

    /**
     * @return array|mixed
     */
    public static function flush()
    {
        return Session::pull(self::MAIN_CONTAINER, []);
    }
}
