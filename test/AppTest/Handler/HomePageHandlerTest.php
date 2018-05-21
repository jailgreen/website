<?php
/**
 * @license    https://opensource.org/licenses/BSD-3-Clause New BSD License
 * @copyright  (c) 2017-2018, jailgreen jukka@jahlgren.eu
 */

declare(strict_types=1);

namespace AppTest\Handler;

use App\Handler\HomePageHandler;

use AppTest\ContainerTrait;
=======
>>>>>>> Git init
use PHPUnit\Framework\TestCase;
use Prophecy\Argument;
use Prophecy\Prophecy\ObjectProphecy;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response\HtmlResponse;
use Zend\Diactoros\Response\JsonResponse;
use Zend\Expressive\Router\RouterInterface;
use Zend\Expressive\Template\TemplateRendererInterface;

/**
 * @group App
 */
class HomePageHandlerTest extends TestCase
{
    use ContainerTrait;

    /** @var ObjectProphecy */
    protected $container;

    /** @var RouterInterface<ObjectProphecy> */
    protected $router;

    protected function setUp() : void
    {
        $this->container = $this->mockContainerInterface();
        $this->router    = $this->prophesize(RouterInterface::class);
    }

    public function testReturnsJsonResponseWhenNoTemplateRendererProvided()
    {
        // $this->container = $this->->mockContainerInterface();
        // $this->router    = $this->prophesize(RouterInterface::class);

        $homePage = new HomePageHandler(
            $this->router->reveal(),
            null,
            get_class($this->container->reveal())
        );
        $response = $homePage->handle(
            $this->prophesize(ServerRequestInterface::class)->reveal()
        );

        $this->assertInstanceOf(JsonResponse::class, $response);
    }

    public function testReturnsHtmlResponseWhenTemplateRendererProvided()
    {
        // $this->container = $this->prophesize(ContainerInterface::class);
        // $this->router    = $this->prophesize(RouterInterface::class);

        $renderer = $this->prophesize(TemplateRendererInterface::class);
        $renderer
            ->render('app::home-page', Argument::type('array'))
            ->willReturn('');

        $homePage = new HomePageHandler(
            $this->router->reveal(),
            $renderer->reveal(),
            get_class($this->container->reveal())
        );

        $response = $homePage->handle(
            $this->prophesize(ServerRequestInterface::class)->reveal()
        );

        $this->assertInstanceOf(HtmlResponse::class, $response);
    }
}
