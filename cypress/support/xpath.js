

const url = 'https://www.otcmarkets.com';
const searchInput ='#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div._2LtWySGSlk.sc-htpNat.fzUmoZ.sc-bdVaJa.iHZvIS > div:nth-child(1) > div > div._1jocgGqVNR.HOcrWAfzU5.sc-htpNat.iSNGhk.sc-bdVaJa.iHZvIS > input'; 
const searchButton = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div._2LtWySGSlk.sc-htpNat.fzUmoZ.sc-bdVaJa.iHZvIS > div:nth-child(1) > div > div._1jocgGqVNR.HOcrWAfzU5.sc-htpNat.iSNGhk.sc-bdVaJa.iHZvIS > svg';
const listedResult = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div._2LtWySGSlk.sc-htpNat.fzUmoZ.sc-bdVaJa.iHZvIS > div:nth-child(1) > div > div._3ZtHL6PFoH.sc-htpNat.jtWIOA.sc-bdVaJa.gRrvFh > div > div.Rnxv8ImvYu';
const openLable = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div._2AJ8TxkVSp.sc-htpNat.jtWIOA.sc-bdVaJa.iHZvIS > div:nth-child(1) > label';
const openValue = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div._2AJ8TxkVSp.sc-htpNat.jtWIOA.sc-bdVaJa.iHZvIS > div:nth-child(1) > p';
const marketLabel = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div._2AJ8TxkVSp.sc-htpNat.jtWIOA.sc-bdVaJa.iHZvIS > div:nth-child(4) > span > span > label';
const marketValue = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div._2AJ8TxkVSp.sc-htpNat.jtWIOA.sc-bdVaJa.iHZvIS > div:nth-child(4) > p';
const cookiesButton = '#userAgreementContent > div._127GDumGMt._3T-8VMAswe._1jLAfxcqnx > button';
const securityTab = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(5) > a';

const companyName = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(1) > div > div > div._33MgosRhnB.sc-htpNat.pyeRb.sc-bdVaJa.bVTGsP > h1._2D4XgQ0gJK';
const marketLabelSecy = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div:nth-child(3) > div.sc-bdVaJa.ensNgD > b > span > span > label';
const marketValueSec = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div:nth-child(3) > div.sc-bdVaJa.kYmYWE';
const dateSec = '#root > div > div._2Ff6O56evM.sc-bdVaJa.dmWroL > div.sc-bdVaJa.gRrvFh > div._18j_zIXZbQ > div > div > div._1JEd4J_iiB.sc-htpNat.eLQHN.sc-bdVaJa.iHZvIS > div:nth-child(2) > div > div._335BJ2NvZW > div > div:nth-child(3) > div.sc-bdVaJa.fKInnm';


export {
    url,
    searchInput,
    searchButton,
    listedResult,
    openLable,
    openValue,
    cookiesButton,
    marketLabel,
    marketValue,
    securityTab,
    companyName,
    marketLabelSecy,
    marketValueSec,
    dateSec
}