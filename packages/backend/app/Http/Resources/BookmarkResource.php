<?php

namespace App\Http\Resources;

use App\Http\Resources\TagResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BookmarkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            ...$this->resource->toArray(),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
        ];
    }

}
