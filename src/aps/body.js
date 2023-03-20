import Swiper from "react-id-swiper";
import React, {useState, useRef}from "react";
import 'swiper/swiper-bundle.css';
import './body.css'
import { DataSiswaPost, JurusanPost } from './postDb'



function Badan (){

    const Postnow = () => {
        
        
        if (safeNik() === "")
            return console.log("nik nya ga boleh kosong yaa");
        else 
            {
                if (safenama() === "")
                    return console.log("nama tidak boleh kosong");
                else
                    {
                        if (safealumni() === "")
                            return console.log("alumni nya tolong di isi kak");
                        else
                            {
                                if (jur === "kosong")
                                    return console.log("jurusan nya di pilih yaa")
                                else 
                                    {
                                        if (jur2 === "kosong")
                                            return console.log("jurusan alternatif nya jangan lupa di pilih juga")
                                        else
                                            {   
                                                console.log(safeNik(),safenama(),safealumni(),jur,jur2);
                                                JurusanPost(safenama(),safeNik(),safealumni(),jur,jur2);
                                                DataSiswaPost(safenama(),safeNik(),safealumni(),jur,jur2);
                                            }
                                    }
                            }
                    }
            }
        
    }



    //input nik
    const iptnik = useRef(null);
    const safeNik = () => {
        const nikSave = iptnik.current.value;
        return nikSave 
    };
    
    //input nama
    const iptnama = useRef(null);
    const safenama = () => {
        const namasave = iptnama.current.value;
        console.log(namasave)
        return namasave
    }

    //input alumni 
    const iptalumni = useRef(null);
    const safealumni = () => {
        const alumnisave = iptalumni.current.value;
        console.log(alumnisave)
        return alumnisave
    }
    const testnik = () => {
        console.log(safeNik());
    }

    const [jur, setjur] = useState("kosong")
    const [jur2, setjur2] = useState("kosong")
    // hidden button jurusan 
    const [showPPLG, setPPLG] = useState(true);
    const [showAPAT, setAPAT] = useState(true);
    const [showNKPI, setNKPI] = useState(true);
    const [showATPH, setATPH] = useState(true);
    const [showAPHP, setAPHP] = useState(true);
    const [showMPLB, setMPLB] = useState(true);
    
    const clickPPLG = () => {setPPLG (false);setAPAT(true);setNKPI(true);setATPH(true);setAPHP(true);setMPLB(true); setjur("PPLG")};
    const clickAPAT = () => {setPPLG (true);setAPAT(false);setNKPI(true);setATPH(true);setAPHP(true);setMPLB(true); setjur("APAT")};
    const clickNKPI = () => {setPPLG (true);setAPAT(true);setNKPI(false);setATPH(true);setAPHP(true);setMPLB(true); setjur("APAT")};
    const clickATPH = () => {setPPLG (true);setAPAT(true);setNKPI(true);setATPH(false);setAPHP(true);setMPLB(true); setjur("APAT")};
    const clickAPHP = () => {setPPLG (true);setAPAT(true);setNKPI(true);setATPH(true);setAPHP(false);setMPLB(true); setjur("APAT")};
    const clickMPLB = () => {setPPLG (true);setAPAT(true);setNKPI(true);setATPH(true);setAPHP(true);setMPLB(false); setjur("APAT")};

    const clickPPLG2 = () => setjur2("PPLG");
    const clickAPAT2 = () => setjur2("APAT");
    const clickNKPI2 = () => setjur2("NKPI");
    const clickATPH2 = () => setjur2("ATPH");
    const clickAPHP2 = () => setjur2("APHP");
    const clickMPLB2 = () => setjur2("MPLB");

    const Pplg = () => {
        return (
        <div><button className="pplg-btn" onClick={clickPPLG2}>PPLG</button></div>);
    }
    const Apat = () => {
        return (
        <div><button className="apat-btn" onClick={clickAPAT2}>APAT</button></div>);
    }
    const Nkpi = () => {
        return (
        <div><button className="nkpi-btn" onClick={clickNKPI2}>NKPI</button></div>);
    }
    const Atph = () => {
        return (
        <div><button className="atph-btn" onClick={clickATPH2}>ATPH</button></div>);
    }
    const Aphp = () => {
        return (
        <div><button className="aphp-btn" onClick={clickAPHP2}>APHP</button></div>);
    }
    const Mplb = () => {
        return (
        <div><button className="mplb-btn" onClick={clickMPLB2}>MPLB</button></div>);
    }
    return(
        <Swiper>
        <div className="slide1"> 
            <div className="swipe1">
                <div className="card">
                    <div className="for1">
                        <p className='judul-card'>Selamat datang</p>
                        <p className='text-card'>Silahkan untuk mengisi Nik di bawah ini</p>
                        <p className='text-card'>geser ke kiri untuk lanjut</p>
                        <br/>
                        <input type="text" ref={iptnik} className="input-card" placeholder="Isi nik disini" onChange={testnik}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide2">
            <div className="swipe2">
                <div className="card">
                    <div className="for1">
                        <p className='judul-card'>Masukkan Nama Anda</p>
                        <input type="text" ref={iptnama} className="input-card" placeholder="Isi nama disini" onChange={safenama}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide3">
            <div className="swipe3">
                <div className="card">
                    <div className="for1">
                        <p className='judul-card'>Alumni dari mana?</p>
                        <input type="text" ref={iptalumni} className="input-card" placeholder="Isi sekolahmu disini" onChange={safealumni}></input>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide4">
            <div className="swipe4">
                <div className="card">
                    <div className="for1">
                        <p className='judul-card'>Mau jurusan apa?</p>
                        <button onClick={clickPPLG} value="1">PPLG</button>
                        <button onClick={clickAPAT} value="2">APAT</button>
                        <button onClick={clickNKPI} value="3">NKPI</button>
                        <button onClick={clickATPH} value="4">ATPH</button>
                        <button onClick={clickAPHP} value="5">APHP</button>
                        <button onClick={clickMPLB} value="6">MPLB</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide5">
            <div className="swipe5">
                <div className="card">
                    <div className="for1">
                        <p className='judul-card'>jurusan alternatif</p>
                        {showPPLG ? <Pplg /> : null}
                        {showAPAT ? <Apat /> : null}
                        {showNKPI ? <Nkpi /> : null}
                        {showATPH ? <Atph /> : null}
                        {showAPHP ? <Aphp /> : null}
                        {showMPLB ? <Mplb /> : null}
                    </div>
                </div>
            </div>
        </div>
        <div className="slide6">  
            <div className="swipe6">
                <div className="card">
                    <div className="for1">
                        <p className='judul-card'>bagian akhir</p>
                        <p>pastikan mengisi semua kolom dengan benar</p>
                        <button onClick={Postnow}>Daftar</button>
                    </div>
                </div>
            </div>
        </div>
        </Swiper>
    );
    
}
export default Badan