import firebase, { analytics, auth, firestore as db , storage } from "../firebase";


const apis = {};

apis.addService = serviceObj => {
    return db.collection("services").add({
        sNo: serviceObj.sNo,
        sType: serviceObj.sType,
        sCustName: serviceObj.sCustName,
        sPhone: serviceObj.sPhone,
        sPartner: serviceObj.sPartner,
        sPartnerId: serviceObj.sPartnerId,
        sVehicleNo: serviceObj.sVehicleNo,
        sPlace: serviceObj.sPlace,
        sDate: serviceObj.sDate,
        sAmount: serviceObj.sAmount
    });

};

apis.addPartner = partnerObj => {
    return db.collection("partners").add({
        pName: partnerObj.pName,
        pPhone: partnerObj.pPhone,
        pAddress: partnerObj.pAddress,
        pPlace: partnerObj.pPlace
    });

};

apis.getServices = () => {
    return db.collection("services").orderBy("sDate", "desc").get();

};

apis.getPartners = () => {
    return db.collection("partners").orderBy("pName", "desc").get();
};

export default apis;
