segment-breakpoints v1.0.0
===================
Library for work with js breakpoints.

Install via npm:
-------------------
```sh
npm i segment-breakpoints --save
```
js
```javascript
import SegmentBreakpoints from 'segment-breakpoints';
const sb = new SegmentBreakpoints({
    0:{
        min:false,
        in:fnc.b_in0x600,
        out:fnc.b_out0x600
    },
    600:{
        max:true,
        min:false,
        in:fnc.b_in600x700,
        out:fnc.b_out600x700
    },
    1280:{
        max:true,
        min:false,
        in:fnc.b_in1280x1440,
        out:fnc.b_out1280x1440
    },
    1600:{
        max:true,
        min:false,
        in:fnc.b_in1600,
        out:fnc.b_out1600
    }
});
```