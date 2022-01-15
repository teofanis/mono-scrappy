<?php

function domainMatches($url, $domainToCheck, $strict = false)
{
    //Appends the http if its not present in the url string e.g- example.com
    if (!$strict && !preg_match("~^(?:f|ht)tps?://~i", $url)) {
        $url = "http://{$url}";
    }
    $urlDomain = implode('.', array_slice(explode('.', parse_url($url, PHP_URL_HOST)), -2));
    return strtolower(trim($urlDomain)) == strtolower(trim($domainToCheck));
}
