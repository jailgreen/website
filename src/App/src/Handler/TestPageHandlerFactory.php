<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace App\Handler;

use Psr\Container\ContainerInterface;
use Zend\Expressive\Template\TemplateRendererInterface;

class TestPageHandlerFactory
{
    public function __invoke(ContainerInterface $container) : TestPageHandler
    {
        return new TestPageHandler($container->get(TemplateRendererInterface::class));
    }
}
