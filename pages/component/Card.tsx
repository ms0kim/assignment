import { useEffect } from "react"

export default function Card() {
  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const cardContainer = document.querySelector('.card ul');
    const cards = Array.from(cardContainer!.querySelectorAll('.card ul li'));

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    cards.forEach(card => {
      cardContainer!.appendChild(card);
    })
  }

  return (
    <div className="card">
      <h2>
        Snap photos and share like<br/>
        never before
      </h2>
      <ul>
        <li>
          <img src="/img/photo1.png" alt="" />
          <h3>Sed ut perspiciatis</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit<br/>
            aspernatur aut odit aut fugit, sed quia consequuntur<br/>
            magni dolores eos qui ratione voluptatem.
          </p>
          <a href="#none">Learn more</a>
        </li>
        <li>
          <img src="/img/photo2.png" alt="" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Amet, consectetur adipiscing elit, sed do eiusmod<br/>
            tempor incididunt ut labore et dolore magna aliqua. Ut<br/>
            enim ad minim veniam, quis.
          </p>
          <a href="#none">Learn more</a>
        </li>
        <li>
          <img src="/img/photo3.png" alt="" />
          <h3>Nemo enim ipsam</h3>
          <p>
            Consequuntur magni dolores eos qui ratione<br/>
            voluptatem sequi nesciunt. Neque porro quisquam est,<br/>
            qui dolorem ipsum quia dolor.
          </p>
          <a href="#none">Learn more</a>
        </li>
      </ul>
    </div>
  )
}