import "react";
import logo from "../../assets/images/icons/new-ipad-logo.png";
import main from "../../assets/images/home/mac-laptop.jpg";
import watch from "../../assets/images/home/watch-series-5.jpg";
import card from "../../assets/images/home/apple-card.jpg";
import tv from "../../assets/images/home/apple-tv-background.jpg";
import servant from "../../assets/images/icons/servant-logo.png";
import backgroundImage from "../../assets/images/home/air-pods.jpg";
import iphone from "../../assets/images/home/iphone11-pro-bg.jpg";
import bg from "../../assets/images/home/iphone11-bg.jpg";
import mac from "../../assets/images/home/macbook-pro.jpg";
function Section() {
  return (
    <>
      <section className="main-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title">MacBook Pro</div>

          <div className="brief-description">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>

          <div className="main-image-wrapper">
            <img src={main} />
          </div>
        </div>
      </section>

      <section className="second-hightlight-wrapper">
        <div className="internal-wrapper">
          <div className="title-wraper">iPhone 11 Pro</div>
          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
            <img src={iphone} />
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="third-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="title-wraper">iPhone 11</div>
          <div className="description-wrapper">
            Just the right amount of everything.
          </div>
          <div className="price-wrapper">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
          <img src={bg} />
        </div>
      </section>

      <section className="fourth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch} />
            </div>
          </div>
          <div className="description-wraper">
            With the new Always-On Retina display.
            <br />
            You’ve never seen a watch like this.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={card} />
            </div>
          </div>
          <div className="description-wraper">
            Get 3% Daily Cash on purchases from Apple using Apple Card.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fifth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={tv} />
            </div>
          </div>

          <div className="tvshow-logo-wraper">
            <img src={servant} />
          </div>

          <div className="watch-more-wrapper">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">AirPods Pro</div>
          </div>

          <div className="description-wraper">
            Magic like you’ve never heard.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
          <img src={backgroundImage} />
        </div>
      </section>
      <section className="sixth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title-small">MacBook Pro</div>

          <div className="description-wraper">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
          <img src={mac} />
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={logo} />
            </div>
          </div>

          <div className="description-wraper">
            Like a computer. Unlike any computer.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
