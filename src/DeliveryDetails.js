import React, { useState } from 'react';
import Barcode from 'react-barcode';

const DeliveryNote = () => {
  const [barcodeValue, setBarcodeValue] = useState('1025486947');
  const [inputValue, setInputValue] = useState(''); // L'état pour gérer l'entrée

  // Fonction pour gérer les changements dans le champ de texte
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Met à jour l'état avec la valeur du champ de texte
    setBarcodeValue(e.target.value); // Met à jour dynamiquement la valeur du code-barres
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '2px solid #000' }}>
      <h3>02/04/2024 17:42</h3>
      <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} // Lorsque l'utilisateur tape, cela met à jour la valeur du code-barres
                placeholder="Entrez un code-barres"
                style={{ padding: '5px', width: '100%' }}
              />
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginBottom: '20px',
        border: '3px double #000'  
      }}>
        <tbody>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              <Barcode value={barcodeValue} format="CODE128" />
            </td>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              <strong>EXPÉDITEUR : </strong> ronja fashion <br />
              <strong>ADRESSE :</strong> Moknine, Monastir <br />
              <strong>TÉLÉPHONE :</strong> 55388187 <br />
              <strong>M/F : </strong> 06759894
            </td>
          </tr>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }}>
            </td>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              Date : 2024-04-02 <br />
              Destination : <strong>SFAX (1)</strong>
            </td>
          </tr>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }} colSpan="2">
              <div><strong>NOM DE DESTINATAIRE :</strong> rim</div>
              <div><strong>ADRESSE : </strong>sfax SFAX Est Sfax</div>
              <div><strong>TELEPHONE 1 :</strong> 29030793</div>
              <div><strong>TELEPHONE 2 :</strong> 55388187</div>
            </td>
          </tr>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              <Barcode value={barcodeValue} format="CODE128" />
            </td>
            <td style={{ border: '3px double #000', padding: '8px' }}>
             
              <strong>Désignation  : </strong> rose taille 36
            </td>
          </tr>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }}>
             
            </td>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              Quantité : 1 
          
            </td>


          </tr>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              <strong>BON DE LIVRAISON N° 102</strong>
            </td>
            <td style={{ border: '3px double #000', padding: '8px' }}>
              À payer : <strong>62,000 DT</strong>
            </td>
          </tr>
          <tr>
            <td style={{ border: '3px double #000', padding: '8px' }}></td>
            <td>
              <img src={`${process.env.PUBLIC_URL}/images/jet-removebg-preview.png`} alt="Logo" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryNote;
