const hello = [{str: "what"},{str: "wtf"},{str:"who"}] || [243,"ffgdf", 534, true]

//this code is suppose to 
/*
 * assign url according to current webpage
 * assign svg according to current or given
 * get the n random data,
*/

/*
 * maybe split, teawk and funnel in the future
*/


const funnel = ({data, index, tweak}) => {

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
    const res = [];


    if(typeof tweak === 'object'){
        const tweakRes = tweak({data, tweak});
        data = tweakRes.data;
    }

    for(let i = 0; i < index; i++) {

        let rand_sponsor = Math.floor(Math.random() * Object.entries(data).length)

        if(!history.includes(rand_sponsor) || data[rand_sponsor] == undefined ){

            res.push(data[rand_sponsor]);
            history.push(rand_sponsor);
        } else {
            i--; //goes back one index so the loop continues
        }

    }
    return res;
}

// pass any array
// how to use -> funnel({data: hello, index: 6})
// returns -> n random objects from list



const tweak = ({data, tweak}) => {
 
    if(!data || data === undefined || 
        !tweak || tweak === undefined) {

        throw new Error(JSON.stringify({
            error: "missing data or index",
            format: {
                data: "{jsonObj}",
                index: "index 5 default"
            }
        }))
    }

    const tweakLog = []
    const res = [];



//to tweak specified data if object
    if(typeof data === 'object' && 
    typeof tweak == 'object'){
                
        Object.entries(tweak).map(([key, value]) => {
            if(data[i][key]){
                data[i][key] == value;
                tweakLog.push`${key} successfully changed`
            } else {                        
                tweakLog.push`${key} not found`
            }
        })

    }

    //res.push(data[rand_sponsor]);
    //history.push(rand_sponsor);

    return {tweakLog, res};
}

const myres = funnel({
    data: hello, 
    index: 2, 
    tweak:{
        str: "hello",
        url: "none"
    }
})

console.log(myres)


/*
export {
    funnel, 
    tweak
}
*/

/*
module.exports = {
    funnel
}
*/

/*

const funnel = ({data, index, tweak}) => {

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

const f = funnel({
    data: [{h:1},{f:2},{l:3}],
    index: 2,
    tweak: {
        h:4
    }
})

console.log(f)
*/
