import { css } from 'emotion';

export const microbialMat = css`
  background:
    radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
    radial-gradient(at 100% 100%,      rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px),
    #8a3;
  background-size: 20px 20px;
`;

export const stairs = css`
  background: 
    linear-gradient(63deg, #999 23%, transparent 23%) 7px 0, 
    linear-gradient(63deg, transparent 74%, #999 78%), 
    linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%), 
    #444;
  background-size: 16px 48px;
`;

export const arrows = css`
  background:
    linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px,
    linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),
    linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px);
  background-color:#e1ebbd;
  background-size: 128px 128px;
`;

export const zigZag = css`
  background: 
    linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #ECEDDC 25%, transparent 25%),
    linear-gradient(45deg, #ECEDDC 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: #EC173A;
`;

export const weave = css`
  background:
    linear-gradient(135deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
    linear-gradient(225deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
  background-color:#708090;
  background-size: 64px 128px;
`;

export const upholstery = css`
  background:
    radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,
    radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px,
    radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0,
    radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px,
    radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0,
    radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px,
    radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,
    radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px,
    linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,
    linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0;
  background-color: #300; 
  background-size: 100px 100px;
`;

export const marrakesh = css`
  background-color: white;
  background-image:
    radial-gradient(midnightblue 9px, transparent 10px),        
    repeating-radial-gradient(midnightblue 0, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px);    
  background-size: 30px 30px, 90px 90px; 
  background-position: 0 0;
`;

export const argyle = css`
  background-color: #6d695c;
  background-image:
    repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
    repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
    linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
    linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
  background-size: 70px 120px;
`;

export const waves = css`
  background: 
    radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent),
    radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
  background-color: slategray;
  background-size: 75px 100px;
`;

export const bradyBunch = css`
  background-image:
    radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%),
    radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%);
  background-size: 110px 110px;
  background-color: #C8D3A7;
  background-position: 0 0, 55px 55px;
`;

export const yinYang = css`
background: 
  radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,
  radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,
  radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,
  radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,
  radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),
  radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),
  radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,
  radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px;
background-color: #63773F;
background-size: 100px 100px;
`;

export const stars = css`
  background:
    linear-gradient(324deg, #232927 4%,   transparent 4%) -70px 43px,
    linear-gradient( 36deg, #232927 4%,   transparent 4%) 30px 43px,
    linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,
    linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,
    linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,
    linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px,

    linear-gradient(324deg, #232927 4%,   transparent 4%) -20px 93px,
    linear-gradient( 36deg, #232927 4%,   transparent 4%) 80px 93px,
    linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px,
    linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px,
    linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px,
    linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px;
  background-color: #232927;
  background-size: 100px 100px;
`;

export const cross = css`
  background: 
    radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent),
    radial-gradient(circle, transparent 20%, slategray 20%, slategray 80%, transparent 80%, transparent) 50px 50px,
    linear-gradient(#A8B1BB 8px, transparent 8px) 0 -4px,
    linear-gradient(90deg, #A8B1BB 8px, transparent 8px) -4px 0;
  background-color: slategray;
  background-size:100px 100px, 100px 100px, 50px 50px, 50px 50px;
`;

export const seigaiha = css`
  background-color: silver;
  background-image: 
    radial-gradient(circle at 100% 150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
    radial-gradient(circle at 0    150%, silver 24%, white 25%, white 28%, silver 29%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
    radial-gradient(circle at 50%  100%, white 10%, silver 11%, silver 23%, white 24%, white 30%, silver 31%, silver 43%, white 44%, white 50%, silver 51%, silver 63%, white 64%, white 71%, transparent 71%, transparent),
    radial-gradient(circle at 100% 50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent),
    radial-gradient(circle at 0    50%, white 5%, silver 6%, silver 15%, white 16%, white 20%, silver 21%, silver 30%, white 31%, white 35%, silver 36%, silver 45%, white 46%, white 49%, transparent 50%, transparent);
  background-size:100px 50px;
`;

export const shippo = css`
  background-color: #def;
  background-image:
    radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),
    radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%);
  background-size:80px 80px;
  background-position:0 0, 40px 40px;
`;

export const checkerboard = css`
  background-color: #eee;
  background-image:
    linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black), 
    linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
  background-size:60px 60px;
  background-position:0 0, 30px 30px;
`;

export const polkaDot = css`
  background-color: #001;
  background-image:
    radial-gradient(white 15%, transparent 16%),
    radial-gradient(white 15%, transparent 16%);
  background-size:60px 60px;
  background-position: 0 0, 30px 30px;
`;

export const tartan = css`
background-color: hsl(2, 57%, 40%);
background-image:
  repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
  repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
  repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px);
`;

export const madras = css`
  background-color: hsl(34, 53%, 82%);
  background-image:
    repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,                  
      hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
      hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,                
      hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
      hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
      hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px       
    ),
    repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px, 
      hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
      hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,                
      hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
      hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
      hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px       
    );
`;

export const linedPaper = css`
  background-color: #fff; 
  background-image: 
    linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
    linear-gradient(#eee .1em, transparent .1em);
  background-size: 100% 1.2em;
`;

export const blueprintGrid = css`
  background-color:#269;
  background-image:
    linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
  background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px
`;

export const tableCloth = css`
  background-color: white;
  background-image:
    linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
    linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
  background-size:50px 50px;
`;

export const diagonalStripes = css`
  background-color: gray;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px);
`;

export const honeyComb = css`
  background:
    radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
    radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
    linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
    linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
    linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
    linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
  background-size:40px 60px;
`;

export const wave = css`
  background:
    linear-gradient(#ffffff 50%, rgba(255,255,255,0) 0) 0 0,
    radial-gradient(circle closest-side, #FFFFFF 53%, rgba(255,255,255,0) 0) 0 0,
    radial-gradient(circle closest-side, #FFFFFF 50%, rgba(255,255,255,0) 0) 55px 0 #48B;
  background-size: 110px 200px;
  background-repeat: repeat-x;
`;

export const chocolateWeave = css`
  background: 
    linear-gradient(45deg, #dca 12%, transparent 0, transparent 88%, #dca 0),
    linear-gradient(135deg, transparent 37%, #a85 0, #a85 63%, transparent 0),
    linear-gradient(45deg, transparent 37%, #dca 0, #dca 63%, transparent 0) #753;
  background-size: 25px 25px;
`;

// export {
//   microbialMat,
//   stairs,
//   arrows,
//   zigZag,
//   weave,
//   upholstery,
//   marrakesh,
//   argyle,
//   waves,
//   bradyBunch,
//   yinYang,
//   stars,
//   cross,
//   seigaiha,
//   shippo,
//   checkerboard,
//   polkaDot,
//   tartan,
//   madras,
//   linedPaper,
//   blueprintGrid,
//   tableCloth,
//   diagonalStripes,
//   honeyComb,
//   wave,
//   chocolateWeave,
// };
