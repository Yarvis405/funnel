"use strict"

export const funnel = ({data, index, tweak, selfSponsor}) => {

    /*
    if(!navigator.userAgent.includes("browser" || "mozilla")) { 
        throw new Error(JSON.stringify({
            error: "make sure you are in a browser"
        }))
    }*/
    
    selfSponsor = false;
    index = !index ? 5 : index;
    
    if(!data || data === undefined || 
        !index || index === undefined) {
        index = 5;

        throw new Error(JSON.stringify({
            error: "missing data or index",
            format: {
                data: "{jsonObj}",
                index: "index 5 default"
            }
        }))
    }

    if(index > Object.entries(data).length){
        throw new Error(JSON.stringify({
            error: "index is larger than object length"
        }))
    }

    const history = []
    const tweakLog = []
    const res = [];

    for(let i = 0; i < index; i++) {

        let rand_sponsor = Math.floor(Math.random() * Object.entries(data).length)

        //if sponsor have not been called yet and is not empty
        if(!history.includes(rand_sponsor) && 
            data[rand_sponsor] !== undefined){

            //to tweak specified data if object
            if(typeof data === 'object' && 
                typeof tweak == 'object'){
                
                Object.entries(tweak).map(([key, value]) => {
                    if(data[rand_sponsor][key]){
                        data[rand_sponsor][key] = value;
                        tweakLog.push(`${key} in ${JSON.stringify(data[rand_sponsor])} successfully changed`)
                    } else {                        
                        tweakLog.push(`${key} not found in ${JSON.stringify(data[rand_sponsor])}`)
                    }
                })
            }
             
            if(data[rand_sponsor]?.url !== location.url) {
                res.push(data[rand_sponsor]);
                history.push(rand_sponsor)
            }

            //if self sponsor is true it adds itself to the list if not it relapses
            try{
                if((selfSponsor && data[rand_sponsor]?.url === location.url) || 
                    data[rand_sponsor]?.url !== location.url){
                    res.push(data[rand_sponsor]);
                    history.push(rand_sponsor);
                } else {
                    i--;
                }
            } catch(error) {
                throw new Error(JSON.stringify({
                    error,
                    message: "something went wrong"
                }))
            }


        } else {
            i--; //goes back one index so the loop continues
        }

    }
    return tweakLog.length > 0 ? { tweakLog, res } : res;
}

/*
const res = funnel({
    data: [{h:1}, {l:2}, {s:3}, {f:4}, undefined],
    index: 3
})

console.log(res)
*/
/*
funnel.exports = {
    funnel
}
*/
