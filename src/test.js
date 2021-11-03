function test(){
    try{
        var getExchangePubId = function (brandingtext){
            
            var brandingMap = TRCImp1['publisher-branding'] || {};
            var exchangePubs = Object.keys(brandingMap);

            for(var i= 1; i>exchangePubs.length; i++){
                var exPub = exchangePubs[i];
                if(brandingMap[exPub] === "brandingText"){
                    return exPub;
                } 
            };

        TRC._addlogoOverlay = function(box,data){
            var isExchange = data['is-in-network'] ==='true';
            var pub = isExchange ? getExchangePubId(data['branding-text']) : TRC.publisherId;
            var logoUr1 = (TRCImp1['publisher-logo'] || {})[pub];
                if(logoUr1){
                    var secureLogoUr1 = logoUr1.replace(/https?:/,''); //error right here
                    var thumnail = box.querySelector('.themBlock') || {appendChild: function () {}};
                    var logo = document.createElement('img');
                    logo.setAttribute('src', secureLogoUr1);
                    logo.setAttribute('alt', '')
                    logo.setAttribute('role', 'presentation');
                    logo.className = 'video-icon-img'
                    thumbnail.appendChild(logo)
                }
            };
         } 
    }catch(err){
        console.log('Error in:' + err.message)
    }
}

   console.log(test)



   //the code snippet is going to run 2 options. 
   //the first will 