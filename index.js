export const funnel = ({data, index, tweak}) => {

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

        if(!history.includes(rand_sponsor) || data[rand_sponsor] == undefined ){

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

            res.push(data[rand_sponsor]);
            history.push(rand_sponsor);
        } else {
            i--; //goes back one index so the loop continues
        }

    }
    return tweakLog.length > 0 ? { tweakLog, res } : res;
}


funnel.exports = {
    funnel
}
