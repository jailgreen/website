<?php

/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */
declare(strict_types=1);

namespace AppTest;

use App\ConfigProvider;
use PHPUnit\Framework\TestCase;

/**
 * Description of ConfigProviderTest
 *
 * @group App
 * @author jailgreen jukka@jahlgren.eu
 */
class ConfigProviderTest extends TestCase
{
    /**
     * @var ConfigProvider
     */
    private $provider;

    protected function setUp() : void
    {
        $this->provider = new ConfigProvider();
    }

    public function testInvocationReturnsArray() : array
    {
        $config = ($this->provider)();
        self::assertInternalType('array', $config);

        return $config;
    }

    /**
     * @depends testInvocationReturnsArray
     * @param array $config
     * @return void
     */
    public function testReturnedArrayContainsDependencies(array $config) : void
    {
        self::assertArrayHasKey('dependencies', $config);
        self::assertArrayHasKey('templates', $config);
        self::assertInternalType('array', $config['dependencies']);

        self::assertCount(2, $config['dependencies']['factories']);
    }
}
