class SegmentBreakpoints{
    constructor(config){
        this.currnet = null;
        this.mql = [];//Segment list of media query
        this.glbSegment = {
            min:true,
            max:false
        };
        this.config = config;
        //functions for listener
        this.fnList = {};
        //set min and max point for global
        if('max' in config){
            this.glbSegment.max = config.max;
            delete config.max;
        }
        if('min' in config){
            this.glbSegment.min = config.min;
            delete config.min;
        }
        //check min and max
        Object.keys(config).forEach(br=>{
            if(!('max' in config[br])){
                config[br].max = this.glbSegment.max;
            }
            if(!('min' in config[br])){
                config[br].min = this.glbSegment.min;
            }
        });

        //0 always true
        if(0 in config){
            config[0].min = true;
        }else{
            config[0] = {min:true};
        }

        this.build(config);
    }
    build(config){
        const brs = Object.keys(config);
        //create
        this.mql = brs
            .sort((a,b)=>a-b)
            .reduce((mql,br,i)=>{
                let media = null;

                if(i!==brs.length-1){//not last

                    let min = this.getBreakpoint(br,'min',config[br].min);
                    let max = this.getBreakpoint(brs[i+1],'max',config[brs[i+1]].max);
                    media = `(min-width: ${min}px) and (max-width: ${max}px)`;

                }else{//last

                    let min = this.getBreakpoint(br,'min',config[br].min);
                    media = `(min-width: ${min}px)`;

                }

                mql.push(window.matchMedia(media));//add

                if(mql[i].matches){
                    //set first current
                    this.currnet = br;
                    //run first fn
                    'in' in config[this.currnet] && config[this.currnet].in();
                }

                this.fnList[br] = e => {
                    if(e.matches){
                        'out' in config[this.currnet] && config[this.currnet].out();
                        'in' in config[br] && config[br].in();

                        this.currnet = br;
                    }
                };

                mql[i].addListener(this.fnList[br]);
                return mql;
            },[]);
    }
    getBreakpoint(name,segmentPart,isInclude){
        return segmentPart==='min'?
            isInclude?+name:+name+1:
            isInclude?+name:+name-1;
    }
    destroy(){
        console.log(Object.keys(this.config));
        Object.keys(this.config).forEach(br=>{
            console.log('this.mql',this.mql[br]);
            this.mql[br].removeListener(this.fnList[br]);
        });
    }
}

export default SegmentBreakpoints;