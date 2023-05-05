import './styles.css'

type Props = {
  MainImg: string
}

export default function Contact({ MainImg, }: Props) {
  return (
    <div className="contact-card">
      <img
        src={MainImg}
        alt="imagem Mr
  Whiskerson"
      />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img
          src="./images/phone-icon.png"
          alt="icone
  fone"
        />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img
          src="./images/mail-icon.png"
          alt="icone
  mail"
        />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}
