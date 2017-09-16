import SegmentBreakpoints from 'lib/lib';
import * as fnc from './fncs';

// window.br1 = new SegmentBreakpoints({
//     0:{
//         min:false,
//         in:fnc.b_in0x600,
//         out:fnc.b_out0x600
//     },
//     600:{
//         max:true,
//         min:false,
//         in:fnc.b_in600x700,
//         out:fnc.b_out600x700
//     },
//     700:{
//         max:true,
//         min:false,
//         in:fnc.b_in700x960,
//         out:fnc.b_out700x960
//     },
//     960:{
//         max:true,
//         min:false,
//         in:fnc.b_in960x1280,
//         out:fnc.b_out960x1280
//     },
//     1280:{
//         max:true,
//         min:false,
//         in:fnc.b_in1280x1440,
//         out:fnc.b_out1280x1440
//     },
//     1440:{
//         max:true,
//         min:false,
//         in:fnc.b_in1440x1600,
//         out:fnc.b_out1440x1600
//     },
//     1600:{
//         max:true,
//         min:false,
//         in:fnc.b_in1600,
//         out:fnc.b_out1600
//     }
// });

window.br1 = new SegmentBreakpoints({
    0:{
        in:fnc.b_in0x600,
        out:fnc.b_out0x600
    },
    600:{
        in:fnc.b_in600x700,
        out:fnc.b_out600x700
    },
    700:{
        in:fnc.b_in700x960,
        out:fnc.b_out700x960
    },
    960:{
        in:fnc.b_in960x1280,
        out:fnc.b_out960x1280
    },
    1280:{
        in:fnc.b_in1280x1440,
        out:fnc.b_out1280x1440
    },
    1440:{
        in:fnc.b_in1440x1600,
        out:fnc.b_out1440x1600
    },
    1600:{
        in:fnc.b_in1600,
        out:fnc.b_out1600
    },
    max:true,
    min:false
});

//include exclude

// const br2 = new Breakpoints({
//     600:fnc.b_in0x600,
//     700:fnc.b_in600x700,
//     960:fnc.b_in700x960,
//     1280:fnc.b_in1280x1440,
//     1440:fnc.b_in1440x1600,
//     1600:fnc.b_in1600
// });

