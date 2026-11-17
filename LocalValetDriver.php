<?php

use Valet\Drivers\ValetDriver;

class LocalValetDriver extends ValetDriver
{
    public function serves(string $sitePath, string $siteName, string $uri): bool
    {
        return is_dir($sitePath . '/build');
    }

    public function isStaticFile(string $sitePath, string $siteName, string $uri)
    {
        $filePath = $sitePath . '/build' . $uri;

        if ($uri !== '/' && file_exists($filePath) && !is_dir($filePath)) {
            return $filePath;
        }

        return false;
    }

    public function frontControllerPath(string $sitePath, string $siteName, string $uri): string
    {
        return $sitePath . '/build/index.html';
    }
}
