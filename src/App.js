import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/Shop';
import uniqid from 'uniqid';
import amdryzen5 from './assets/amd-ryzen-5.PNG';
import amd200ge from './assets/amd-200ge.PNG';
import inteli5 from './assets/intel-i5.PNG';
import intelpentium from './assets/intel-pentium.PNG';
import inteli9 from './assets/intel-i9.PNG';
import intelceleron from './assets/intel-seleron.PNG';
import inteli3 from './assets/intel-i3.PNG';
import amdryzen7 from './assets/amd-ryzen-7.PNG';
import gt1030 from './assets/geforce-gt1030.PNG';
import rtx3060 from './assets/geforce-rtx3060.PNG';
import rtx3070 from './assets/geforce-rtx3070.PNG';
import asusradeon from './assets/asus-rx6400.PNG';
import radeon6000 from './assets/radeon-rx6900.PNG';
import kingston3600 from './assets/kingstone-3600.PNG';
import kingstonebeast from './assets/kingstone-beast.PNG';
import pristine2666 from './assets/pristine-2666.PNG';
import apacer from './assets/apacer.PNG';
import crucialp3 from './assets/crucial-p3.PNG';
import corsair from './assets/corsair.PNG';
import pny from './assets/pny.PNG';
import samsung from './assets/samsung-970.PNG';

function App() {

  const [data, setData] = useState([
    {
      id: uniqid(),
      type: 'Processor',
      name: 'AMD Ryzen 5 3600 WOF 3600GHz 100-100000031AWOF',
      price: 160,
      img: amdryzen5,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'AMD Athlon 200GE 3.2GHz',
      price: 65,
      img: amd200ge,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'INTEL Core i5-10600 3.30 GHz (4.80 GHz)',
      price: 300,
      img: inteli5,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'INTEL Pentium Gold G6400 4.00 GHz',
      price: 85,
      img: intelpentium,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'INTEL Core i9-12900F 2.40GHz (5.1GHz)',
      price: 790,
      img: inteli9,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'INTEL Celeron G5905 3.5GHz',
      price: 50,
      img: intelceleron,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'INTEL Core i3-12100 3.30 GHz (4.30GHz)',
      price: 190,
      img: inteli3,
    },
    {
      id: uniqid(),
      type: 'Processor',
      name: 'AMD Ryzen 7 7700X 4.5GHz (5.4GHz) - Procesor',
      price: 600,
      img: amdryzen7,
    },
    {
      id: uniqid(),
      type: 'Graphic Card',
      name: 'GIGABYTE nVidia GeForce GT 1030 OC 2GB GDDR5 64bit - GV-N1030OC-2GI',
      price: 120,
      img: gt1030,
    },
    {
      id: uniqid(),
      type: 'Graphic Card',
      name: 'GAINWARD NVIdia GeForce RTX 3070 Ti Phoenix LHR 8GB NED307T019P2-1046X',
      price: 1100,
      img: rtx3070,
    },
    {
      id: uniqid(),
      type: 'Graphic Card',
      name: 'GIGABYTE GeForce RTX 3060 GAMING OC LHR 12GB GDDR6 192-bit (rev. 2.0) GV-N3060GAMING OC-12D',
      price: 590,
      img: rtx3060,
    },
    {
      id: uniqid(),
      type: 'Graphic Card',
      name: 'ASUS Dual Radeon RX 6400 4GB GDDR6 64-bit - DUAL-RX6400-4G',
      price: 250,
      img: asusradeon,
    },
    {
      id: uniqid(),
      type: 'Graphic Card',
      name: 'POWERCOLOR Radeon RX 6900 XT 16GB GDDR6 256-bit - AXRX 6900XT 16GBD6-3DHE OC',
      price: 1200,
      img: radeon6000,
    },
    {
      id: uniqid(),
      type: 'Ram',
      name: 'KINGSTON Beast RGB 64GB (2 x 32GB) DDR4 3600MHz CL18 - KF436C18BBAK2/64',
      price: 350,
      img: kingston3600,
    },
    {
      id: uniqid(),
      type: 'Ram',
      name: 'KINGSTON Beast RGB 64GB (2 x 32GB) DDR4 3600MHz CL18 - KF436C18BBAK2/64',
      price: 350,
      img: kingstonebeast,
    },
    {
      id: uniqid(),
      type: 'Ram',
      name: 'GEIL PRISTINE 16GB DDR4 2666MHz CL19 GAP416GB2666C19SC',
      price: 80,
      img: pristine2666,
    },
    {
      id: uniqid(),
      type: 'Ram',
      name: 'APACER ES.32G2V.PRH 32GB SODIMM DDR4 2666MHz - RAM Memorija',
      price: 160,
      img: apacer,
    },
    {
      id: uniqid(),
      type: 'SSD',
      name: 'CRUCIAL P3 Plus 500GB PCIe M.2 2280 CT500P3PSSD8 - SSD',
      price: 90,
      img: crucialp3,
    },
    {
      id: uniqid(),
      type: 'SSD',
      name: 'CORSAIR SSD 480GB M.2 PCIe Gen3 MP510 Force Serija - CSSD-F480GBMP510B',
      price: 90,
      img: corsair,
    },
    {
      id: uniqid(),
      type: 'SSD',
      name: 'PNY CS900 240GB SATA III 2.5" SSD - SSD7CS900-960-PB',
      price: 40,
      img: pny,
    },
    {
      id: uniqid(),
      type: 'SSD',
      name: 'SAMSUNG SSD 970 EVO PLUS 500GB NVMe M2 2280 - MZ-V7S500BW,',
      price: 100,
      img: samsung,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (id) => {

    let dataItem = data.find((element) => element.id === id);

     let isFound = cartItems.some((element) => {
      if(element.id === id)
        return true;
      else
        return false;
    })

    if(isFound){
      return;
    }else{
      setCartItems([...cartItems, {...dataItem, amount: 1}]);
      setTotal((prevState) => {
        const newTotal = total + dataItem.price;
        return newTotal;
      });
    }
  }

  const deleteCartItem = (id) => {
    let newArr = cartItems.filter((item) => item.id !== id);
    setCartItems(newArr);
  }

  const incrementAmount = async (id) => {
    let dataItem = data.find((item) => item.id === id);
    await setCartItems(cartItems.map((item) => item.id === id ? {...item, amount: item.amount + 1} : item));

    setTotal((prev) => prev += dataItem.price);
  }

  const decrementAmount = async (id) => {
    let dataItem = data.find((item) => item.id === id);

    let newCartItems = cartItems.map((item) => item.id === id ? {...item, amount: item.amount - 1} : item);


    await setCartItems(newCartItems.filter((item) => item.amount !== 0));
    
    

    setTotal((prev) => prev -= dataItem.price);
  }

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/'
              element={<Landing 
                          cartItems={cartItems} 
                          total={total}
                          deleteCartItem={deleteCartItem}
                          incrementAmount={incrementAmount}
                          decrementAmount={decrementAmount}
                          />}
          />
          <Route path='/shop' 
              element={<Shop data={data}
              cartItems={cartItems}
              total={total}
              addToCart={addToCart}
              incrementAmount={incrementAmount}
              decrementAmount={decrementAmount}
              />} 
          />
          <Route path='*' element={<h1>ERROR 404</h1>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
 