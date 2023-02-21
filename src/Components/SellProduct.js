import React,{ useState } from "react";
import { useGetAuthContex } from '../hooks/useGetAuthContex';
function SellProduct() {
  const { user } = useGetAuthContex()
  const [titlu, setTitlu] = useState('')
  const [categorie, setCategorie] = useState('')
  const [testImage, setPoza] = useState('')
  const [email, setEmail] = useState('')
  const [telefon, setTelefon] = useState('')
  const [descriere, setDescriere] = useState('')
  const [pret, setPret] = useState('')
  const [locatie, setLocatie] = useState('')
  let formData = new FormData()
  const handleImage = (e) => {
    setPoza(e.target.files[0])
  }
  const handleSellProduct = async () => {
    
    formData.append('titlu', titlu)
    formData.append('categorie', categorie)
    formData.append('testImage', testImage)
    formData.append('email', email)
    formData.append('telefon', telefon)
    formData.append('descriere', descriere)
    formData.append('pret', pret)
    formData.append('locatie', locatie)
    formData.append('username', user.username)
    
    await fetch('https://everest-app-api.onrender.com/api/sell/img', {
      method: 'POST',
      body: formData,
    })
    .then(() => console.log('posted from react'))
    .catch((error) => console.log(error))
  }
  return (
    <div className="sell-container">
      <div className="form-bars"></div>
      <div className="sell-form">
        <div className="sell-title">Vinde cu Everest</div>
          <div className="sell-arrange">
            <div>
              <div>Titlul postări</div>
              <input type="text" className="sell-inputs" required onChange={(e) => setTitlu(e.target.value)} value={titlu}></input>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Categoria</div>
              <select className="sell-inputs" required onChange={(e) => setCategorie(e.target.value)} value={categorie}>
                <option value="alegti">Alegeți</option>
                <option value="jucarii">Jucarii</option>
                <option value="natura">Natura</option>
                <option value="papuci">Papuci</option>
                <option value="technologie">Technologie</option>
                <option value="ceasuri">Ceasuri</option>
                <option value="pentru-casa">Pentru casa</option>
                <option value="imbracaminte">Îmbracaminte</option>
                <option value="arta">Arta</option>
                <option value="altele">Altele</option>
              </select>
            </div>
          </div>
          <div className="sell-arrange-special">
            <div>
              <div className="sell-image-square"></div>
              <label for="sell-uploader" className="sell-btn">Alege</label>
              <input type="file" id="sell-uploader" required onChange={handleImage}></input>
            </div>
            <div className="sell-aside">
              <div>
                <div>E-mail</div>
                <input type="email" className="sell-inputs" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
              </div>
              <div>
                <div>Telefon</div>
                <input
                  type="tel"
                  pattern="[0-0]{1}[3-7]{1}[0-9]{8}"
                  className="sell-inputs"
                  required
                  onChange={(e) => setTelefon(e.target.value)} value={telefon}
                ></input>
              </div>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Descrierea produsului</div>
              <textarea className="sell-textarea" required onChange={(e) => setDescriere(e.target.value)} value={descriere}></textarea>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Preț</div>
              <input type="number" className="sell-inputs" required onChange={(e) => setPret(e.target.value)} value={pret}></input>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Locația dumneavoastră</div>
              <input type="text" className="sell-inputs" required onChange={(e) => setLocatie(e.target.value)} value={locatie}></input>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <button className="sell-button" onClick={handleSellProduct}>Publicați</button>
            </div>
          </div>
      </div>
    </div>
  );
}
export default SellProduct;
