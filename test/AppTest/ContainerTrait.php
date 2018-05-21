<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace AppTest;

use Prophecy\Argument;
use Prophecy\Prophecy\ObjectProphecy;
use Psr\Container\ContainerInterface;

/**
 * Helper methods for mock Psr\Container\ContainerInterface.
 *
 * @author jailgreen jukka@jahlgren.eu
 */
trait ContainerTrait
{
    /**
     * Returns a prophecy for ContainerInterface.
     *
     * @return ObjectProphecy
     */
    protected function mockContainerInterface() : ObjectProphecy
    {
        $container = $this->prophesize(ContainerInterface::class);

        return $container;
    }

    /**
     * Inject a service into the container mock.
     *
     * Adjust `has('service')` and `get('service')` returns.
     *
     * @param ObjectProphecy $container
     * @param string $serviceName
     * @param mixed $service
     * @return void
     */
    protected function injectServiceInContainer(ObjectProphecy $container, $serviceName, $service) : void
    {
        $container->has($serviceName)->willReturn(true);
        $container->get($serviceName)->willReturn($service);
    }
}
