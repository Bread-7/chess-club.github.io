/* ------------------------------------------------------------------  */

 // 1-> rook , 2-> knight , 3-> bishop , 4-> queen
 // 5-> king , 6-> w pawn , 7-> d pawn

// ["","","","","","","","","","","","","","","","",]

var sqNames = ["a1","a2","a3","a4","a5","a6","a7","a8","b1","b2","b3","b4","b5","b6","b7","b8","c1","c2","c3","c4","c5","c6","c7","c8","d1","d2","d3","d4","d5","d6","d7","d8","e1","e2","e3","e4","e5","e6","e7","e8","f1","f2","f3","f4","f5","f6","f7","f8","g1","g2","g3","g4","g5","g6","g7","g8","h1","h2","h3","h4","h5","h6","h7","h8"];

 var movement = [

   [ // ROOK
     /* a1 :*/ ["a2","a3","a4","a5","a6","a7","a8","b1","c1","d1","e1","f1","g1","h1"],
     /* a2 :*/ ["a1","a3","a4","a5","a6","a7","a8","b2","c2","d2","e2","f2","g2","h2"],
     /* a3 :*/ ["a1","a2","a4","a5","a6","a7","a8","b3","c3","d3","e3","f3","g3","h3"],
     /* a4 :*/ ["a1","a2","a3","a5","a6","a7","a8","b4","c4","d4","e4","f4","g4","h4"],
     /* a5 :*/ ["a1","a2","a3","a4","a6","a7","a8","b5","c5","d5","e5","f5","g5","h5"],
     /* a6 :*/ ["a1","a2","a3","a4","a5","a7","a8","b6","c6","d6","e6","f6","g6","h6"],
     /* a7 :*/ ["a1","a2","a3","a4","a5","a6","a8","b7","c7","d7","e7","f7","g7","h7"],
     /* a8 :*/ ["a1","a2","a3","a4","a5","a6","a7","b8","c8","d8","e8","f8","g8","h8"],
     /* b1 :*/ ["a1","c1","d1","e1","f1","g1","h1","b2","b3","b4","b5","b6","b7","b8"],
     /* b2 :*/ ["a2","c2","d2","e2","f2","g2","h2","b1","b3","b4","b5","b6","b7","b8"],
     /* b3 :*/ ["a3","c3","d3","e3","f3","g3","h3","b1","b2","b4","b5","b6","b7","b8"],
     /* b4 :*/ ["a4","c4","d4","e4","f4","g4","h4","b1","b2","b3","b5","b6","b7","b8"],
     /* b5 :*/ ["a5","c5","d5","e5","f5","g5","h5","b1","b2","b3","b4","b6","b7","b8"],
     /* b6 :*/ ["a6","c6","d6","e6","f6","g6","h6","b1","b2","b3","b4","b5","b7","b8"],
     /* b7 :*/ ["a7","c7","d7","e7","f7","g7","h7","b1","b2","b3","b4","b5","b6","b8"],
     /* b8 :*/ ["a8","c8","d8","e8","f8","g8","h8","b1","b2","b3","b4","b5","b6","b7"],
     /* c1 :*/ ["a1","b1","d1","e1","f1","g1","h1","c2","c3","c4","c5","c6","c7","c8"],
     /* c2 :*/ ["a2","b2","d2","e2","f2","g2","h2","c1","c3","c4","c5","c6","c7","c8"],
     /* c3 :*/ ["a3","b3","d3","e3","f3","g3","h3","c1","c2","c4","c5","c6","c7","c8"],
     /* c4 :*/ ["a4","b4","d4","e4","f4","g4","h4","c1","c2","c3","c5","c6","c7","c8"],
     /* c5 :*/ ["a5","b5","d5","e5","f5","g5","h5","c1","c2","c3","c4","c6","c7","c8"],
     /* c6 :*/ ["a6","b6","d6","e6","f6","g6","h6","c1","c2","c3","c4","c5","c7","c8"],
     /* c7 :*/ ["a7","b7","d7","e7","f7","g7","h7","c1","c2","c3","c4","c5","c6","c8"],
     /* c8 :*/ ["a8","b8","d8","e8","f8","g8","h8","c1","c2","c3","c4","c5","c6","c7"],
     /* d1 :*/ ["a1","b1","c1","e1","f1","g1","h1","d2","d3","d4","d5","d6","d7","d8"],
     /* d2 :*/ ["a2","b2","c2","e2","f2","g2","h2","d1","d3","d4","d5","d6","d7","d8"],
     /* d3 :*/ ["a3","b3","c3","e3","f3","g3","h3","d1","d2","d4","d5","d6","d7","d8"],
     /* d4 :*/ ["a4","b4","c4","e4","f4","g4","h4","d1","d2","d3","d5","d6","d7","d8"],
     /* d5 :*/ ["a5","b5","c5","e5","f5","g5","h5","d1","d2","d3","d4","d6","d7","d8"],
     /* d6 :*/ ["a6","b6","c6","e6","f6","g6","h6","d1","d2","d3","d4","d5","d7","d8"],
     /* d7 :*/ ["a7","b7","c7","e7","f7","g7","h7","d1","d2","d3","d4","d5","d6","d8"],
     /* d8 :*/ ["a8","b8","c8","e8","f8","g8","h8","d1","d2","d3","d4","d5","d6","d7"],
     /* e1 :*/ ["a1","b1","c1","d1","f1","g1","h1","e2","e3","e4","e5","e6","e7","e8"],
     /* e2 :*/ ["a2","b2","c2","d2","f2","g2","h2","e1","e3","e4","e5","e6","e7","e8"],
     /* e3 :*/ ["a3","b3","c3","d3","f3","g3","h3","e1","e2","e4","e5","e6","e7","e8"],
     /* e4 :*/ ["a4","b4","c4","d4","f4","g4","h4","e1","e2","e3","e5","e6","e7","e8"],
     /* e5 :*/ ["a5","b5","c5","d5","f5","g5","h5","e1","e2","e3","e4","e6","e7","e8"],
     /* e6 :*/ ["a6","b6","c6","d6","f6","g6","h6","e1","e2","e3","e4","e5","e7","e8"],
     /* e7 :*/ ["a7","b7","c7","d7","f7","g7","h7","e1","e2","e3","e4","e5","e6","e8"],
     /* e8 :*/ ["a8","b8","c8","d8","f8","g8","h8","e1","e2","e3","e4","e5","e6","e7"],
     /* f1 :*/ ["a1","b1","c1","d1","e1","g1","h1","f2","f3","f4","f5","f6","f7","f8"],
     /* f2 :*/ ["a2","b2","c2","d2","e2","g2","h2","f1","f3","f4","f5","f6","f7","f8"],
     /* f3 :*/ ["a3","b3","c3","d3","e3","g3","h3","f1","f2","f4","f5","f6","f7","f8"],
     /* f4 :*/ ["a4","b4","c4","d4","e4","g4","h4","f1","f2","f3","f5","f6","f7","f8"],
     /* f5 :*/ ["a5","b5","c5","d5","e5","g5","h5","f1","f2","f3","f4","f6","f7","f8"],
     /* f6 :*/ ["a6","b6","c6","d6","e6","g6","h6","f1","f2","f3","f4","f5","f7","f8"],
     /* f7 :*/ ["a7","b7","c7","d7","e7","g7","h7","f1","f2","f3","f4","f5","f6","f8"],
     /* f8 :*/ ["a8","b8","c8","d8","e8","g8","h8","f1","f2","f3","f4","f5","f6","f7"],
     /* g1 :*/ ["a1","b1","c1","d1","e1","f1","h1","g2","g3","g4","g5","g6","g7","g8"],
     /* g2 :*/ ["a2","b2","c2","d2","e2","f2","h2","g1","g3","g4","g5","g6","g7","g8"],
     /* g3 :*/ ["a3","b3","c3","d3","e3","f3","h3","g1","g2","g4","g5","g6","g7","g8"],
     /* g4 :*/ ["a4","b4","c4","d4","e4","f4","h4","g1","g2","g3","g5","g6","g7","g8"],
     /* g5 :*/ ["a5","b5","c5","d5","e5","f5","h5","g1","g2","g3","g4","g6","g7","g8"],
     /* g6 :*/ ["a6","b6","c6","d6","e6","f6","h6","g1","g2","g3","g4","g5","g7","g8"],
     /* g7 :*/ ["a7","b7","c7","d7","e7","f7","h7","g1","g2","g3","g4","g5","g6","g8"],
     /* g8 :*/ ["a8","b8","c8","d8","e8","f8","h8","g1","g2","g3","g4","g5","g6","g7"],
     /* h1 :*/ ["a1","b1","c1","d1","e1","f1","g1","h2","h3","h4","h5","h6","h7","h8"],
     /* h2 :*/ ["a2","b2","c2","d2","e2","f2","g2","h1","h3","h4","h5","h6","h7","h8"],
     /* h3 :*/ ["a3","b3","c3","d3","e3","f3","g3","h1","h2","h4","h5","h6","h7","h8"],
     /* h4 :*/ ["a4","b4","c4","d4","e4","f4","g4","h1","h2","h3","h5","h6","h7","h8"],
     /* h5 :*/ ["a5","b5","c5","d5","e5","f5","g5","h1","h2","h3","h4","h6","h7","h8"],
     /* h6 :*/ ["a6","b6","c6","d6","e6","f6","g6","h1","h2","h3","h4","h5","h7","h8"],
     /* h7 :*/ ["a7","b7","c7","d7","e7","f7","g7","h1","h2","h3","h4","h5","h6","h8"],
     /* h8 :*/ ["a8","b8","c8","d8","e8","f8","g8","h1","h2","h3","h4","h5","h6","h7"],
   ],

   [ // KNIGHT
     /* a1 :*/ ["b3","c2"],
     /* a2 :*/ ["b4","c3","c1"],
     /* a3 :*/ ["b5","c4","c2","b1"],
     /* a4 :*/ ["b6","c5","c3","b2"],
     /* a5 :*/ ["b7","c6","c4","b3"],
     /* a6 :*/ ["b8","c7","c5","b4"],
     /* a7 :*/ ["c8","c6","b5"],
     /* a8 :*/ ["c7","b6"],
     /* b1 :*/ ["a3","c3","d2"],
     /* b2 :*/ ["a4","c4","d3","e2"],
     /* b3 :*/ ["a1","a5","c5","d4","d2","c1"],
     /* b4 :*/ ["a2","a6","c6","d5","d3","c2"],
     /* b5 :*/ ["a3","a7","c7","d6","d4","c3"],
     /* b6 :*/ ["a4","a8","c8","d7","d5","c4"],
     /* b7 :*/ ["a5","d8","d6","c5"],
     /* b8 :*/ ["a6","c6","d7"],
     /* c1 :*/ ["a2","b3","d3","e2"],
     /* c2 :*/ ["a1","a3","b4","d4","e3","e1"],
     /* c3 :*/ ["b1","a2","a4","b5","d5","e4","e2","d1"],
     /* c4 :*/ ["b2","a3","a5","b6","d6","e5","e3","d2"],
     /* c5 :*/ ["b3","a4","a6","b7","d7","e6","e4","d3"],
     /* c6 :*/ ["b4","a5","a7","b8","d8","e7","e5","d4"],
     /* c7 :*/ ["b5","a6","a8","e8","e6","d5"],
     /* c8 :*/ ["b6","a7","d6","e7"],
     /* d1 :*/ ["b2","c3","e3","f2"],
     /* d2 :*/ ["b1","b3","c4","e4","f3","f1"],
     /* d3 :*/ ["c1","b2","b4","c5","e5","f4","f2","e1"],
     /* d4 :*/ ["c2","b3","b5","c6","e6","f5","f3","e2"],
     /* d5 :*/ ["c3","b4","b6","c7","e7","f6","f4","e3"],
     /* d6 :*/ ["c4","b5","b7","c8","e8","f7","f5","e4"],
     /* d7 :*/ ["c5","b6","b8","f8","f6","e5"],
     /* d8 :*/ ["c6","b7","f7","e6"],
     /* e1 :*/ ["c2","d3","f3","g2"],
     /* e2 :*/ ["c1","c3","d4","f4","g3","g1"],
     /* e3 :*/ ["d1","c2","c4","d5","f5","g4","g2","f1"],
     /* e4 :*/ ["d2","c3","c5","d6","f6","g5","g3","f2"],
     /* e5 :*/ ["d3","c4","c6","d7","f7","g6","g4","f3"],
     /* e6 :*/ ["d4","c5","c7","d8","f8","g7","g5","f4"],
     /* e7 :*/ ["d5","c6","c8","g8","g6","f5"],
     /* e8 :*/ ["c7","d6","f6","g7"],
     /* f1 :*/ ["d2","e3","g3","h2"],
     /* f2 :*/ ["d1","d3","e4","g4","h3","h1"],
     /* f3 :*/ ["e1","d2","d4","e5","g5","h4","h2","g1"],
     /* f4 :*/ ["e2","d3","d5","e6","g6","h5","h3","g2"],
     /* f5 :*/ ["e3","d4","d6","e7","g7","h6","h4","g3"],
     /* f6 :*/ ["e4","d5","d7","e8","g8","h7","h5","g4"],
     /* f7 :*/ ["e5","d6","d8","h8","h6","g5"],
     /* f8 :*/ ["d7","e6","g6","h7"],
     /* g1 :*/ ["e2","f3","h3"],
     /* g2 :*/ ["e1","e3","f4","h4"],
     /* g3 :*/ ["f1","e2","e4","f5","h5","h1"],
     /* g4 :*/ ["f2","e3","e5","f6","h6","h2"],
     /* g5 :*/ ["f3","e4","e6","f7","h7","h3"],
     /* g6 :*/ ["f4","e5","e7","f8","h8","h4"],
     /* g7 :*/ ["f5","e6","e8","h5"],
     /* g8 :*/ ["e7","f6","h6"],
     /* h1 :*/ ["f2","g3"],
     /* h2 :*/ ["f1","f3","g4"],
     /* h3 :*/ ["g1","f2","f4","g5"],
     /* h4 :*/ ["g2","f3","f5","g6"],
     /* h5 :*/ ["g3","f4","f6","g7"],
     /* h6 :*/ ["g4","f5","f7","g8"],
     /* h7 :*/ ["g5","f6","f8"],
     /* h8 :*/ ["g6","f7"],
   ],



   [ // BISHOP
     /* a1 :*/ ["b2","c3","d4","e5","f6","g7","h8"],
     /* a2 :*/ ["b1","b3","c4","d5","e6","f7","g8"],
     /* a3 :*/ ["b2","c1","b4","c5","d6","e7","f8"],
     /* a4 :*/ ["b3","c2","d1","b5","c6","d7","e8"],
     /* a5 :*/ ["b4","c3","d2","e1","b6","c7","d8"],
     /* a6 :*/ ["b5","c4","d3","e2","f1","b7","c8"],
     /* a7 :*/ ["b6","c5","d4","e3","f2","g1","b8"],
     /* a8 :*/ ["b7","c6","d5","e4","f3","g2","h1"],
     /* b1 :*/ ["a2","c2","d3","e4","f5","g6","h7"],
     /* b2 :*/ ["a1","a3","c1","c3","d4","e5","f6","g7","h8"],
     /* b3 :*/ ["a2","a4","c2","d1","c4","d5","e6","f7","g8"],
     /* b4 :*/ ["a3","a5","c3","d2","e1","c5","d6","e7","f8"],
     /* b5 :*/ ["a4","a6","c4","d3","e2","f1","c6","d7","e8"],
     /* b6 :*/ ["a5","a7","c5","d4","e3","f2","g1","c7","d8"],
     /* b7 :*/ ["a6","a8","c6","d5","e4","f3","g2","h1","c8"],
     /* b8 :*/ ["a7","c7","d6","e5","f4","g3","h2"],
     /* c1 :*/ ["b2","a3","d2","e3","f4","g5","h6"],
     /* c2 :*/ ["b1","b3","a4","d1","d3","e4","f5","g6","h7"],
     /* c3 :*/ ["b2","a1","d2","e1","b4","a5","d4","e5","f6","g7","h8"],
     /* c4 :*/ ["b3","a2","b5","a6","d3","e2","f1","d5","e6","f7","g8"],
     /* c5 :*/ ["b4","a3","b6","a7","d4","e3","f2","g1","d6","e7","f8"],
     /* c6 :*/ ["b5","a4","b7","a8","d5","e4","f3","g2","h1","d7","e8"],
     /* c7 :*/ ["b6","a5","b8","d6","e5","f4","g3","h2","d8"],
     /* c8 :*/ ["b7","a6","d7","e6","f5","g4","h3"],
     /* d1 :*/ ["c2","b3","a4","e2","f3","g4","h5"],
     /* d2 :*/ ["c1","c3","b4","a5","e3","f4","g5","h6"],
     /* d3 :*/ ["c2","b1","c4","b5","a6","e2","f1","e4","f5","g6","h7"],
     /* d4 :*/ ["c3","b2","a1","c5","b6","a7","e3","f2","g1","e5","f6","g7","h8"],
     /* d5 :*/ ["c4","b3","a2","c6","b7","a8","e4","f3","g2","h1","e6","f7","g8"],
     /* d6 :*/ ["c5","b4","a3","c7","b8","e5","f4","g3","h2","e7","f8"],
     /* d7 :*/ ["c6","b5","a4","c8","e6","f5","g4","h3","e8"],
     /* d8 :*/ ["c7","b6","a5","e7","f6","g5","h4"],
     /* e1 :*/ ["d2","c3","b4","a5","f2","g3","h4"],
     /* e2 :*/ ["d1","f1","d3","c4","b5","a6","f3","g4","h5"],
     /* e3 :*/ ["d2","c1","f2","g1","d4","c5","b6","a7","f4","g5","h6"],
     /* e4 :*/ ["d3","c2","b1","f3","g2","h1","d5","c6","b7","a8","f5","g6","h7"],
     /* e5 :*/ ["d4","c3","b2","a1","f4","g3","h2","d6","c7","b8","f6","g7","h8"],
     /* e6 :*/ ["d5","c4","b3","a2","f7","g8","d7","c8","f5","g4","h3"],
     /* e7 :*/ ["d6","c5","b4","a3","f6","g5","h4","d8","f8"],
     /* e8 :*/ ["d7","c6","b5","a4","f7","g6","h5"],
     /* f1 :*/ ["g2","h3","e2","d3","c4","b5","a6"],
     /* f2 :*/ ["e1","g1","g3","h4","e3","d4","c5","b6","a7"],
     /* f3 :*/ ["e2","d1","g2","h1","g4","h5","e4","d5","c6","b7","a8"],
     /* f4 :*/ ["e3","e5","d2","c1","g3","h2","g5","h6","e5","d6","c7","b8"],
     /* f5 :*/ ["e4","d3","c2","b1","g4","h3","g6","h7","e6","d7","c8"],
     /* f6 :*/ ["e5","d4","c3","b2","a1","g7","h8","g5","h4","e7","d8"],
     /* f7 :*/ ["e6","d5","c4","b3","a2","g6","h5","e8","g8"],
     /* f8 :*/ ["g7","h6","e7","d6","c5","b4","a3"],
     /* g1 :*/ ["h2","f2","e3","d4","c5","b6","a7"],
     /* g2 :*/ ["h1","h3","f1","f3","e4","d5","c6","b7","a8"],
     /* g3 :*/ ["f2","e1","h2","h4","f4","e5","d6","c7","b8"],
     /* g4 :*/ ["f3","e2","d1","h3","h5","f5","e6","d7","c8"],
     /* g5 :*/ ["f4","e3","d2","c1","h6","h4","f6","e7","d8"],
     /* g6 :*/ ["h5","h7","f5","e4","d3","c2","b1","f7","e8"],
     /* g7 :*/ ["h6","h8","f8","f6","e5","d4","c3","b2","a1"],
     /* g8 :*/ ["f7","e6","d5","c4","b3","a2"],
     /* h1 :*/ ["g2","f3","e4","d5","c6","b7","a8"],
     /* h2 :*/ ["g1","g3","f4","e5","d6","c7","b8"],
     /* h3 :*/ ["g2","f1","g4","f5","e6","d7","c8"],
     /* h4 :*/ ["g3","f2","e1","g5","f6","e7","d8"],
     /* h5 :*/ ["g4","f3","e2","d1","g6","f7","e8"],
     /* h6 :*/ ["g5","f4","e3","d2","c1","g7","f8"],
     /* h7 :*/ ["g6","f5","e4","d3","c2","b1","g8"],
     /* h8 :*/ ["g7","f6","e5","d4","c3","b2","a1"],
   ],


   [ // QUEEN
     /* a1 :*/ ["a2","a3","a4","a5","a6","a7","a8","b1","c1","d1","e1","f1","g1","h1","b2","c3","d4","e5","f6","g7","h8"],
     /* a2 :*/ ["a1","a3","a4","a5","a6","a7","a8","b1","b2","c2","d2","e2","f2","g2","h2","b3","c4","d5","e6","f7","g8"],
     /* a3 :*/ ["a1","a2","a4","a5","a6","a7","a8","b2","c1","b3","c3","d3","e3","f3","g3","h3","b4","c5","d6","e7","f8"],
     /* a4 :*/ ["a1","a2","a3","a5","a6","a7","a8","b3","c2","d1","b4","c4","d4","e4","f4","g4","h4","b5","c6","d7","e8"],
     /* a5 :*/ ["a1","a2","a3","a4","a6","a7","a8","b4","c3","d2","e1","b5","c5","d5","e5","f5","g5","h5","b6","c7","d8"],
     /* a6 :*/ ["a1","a2","a3","a4","a5","a7","a8","b5","c4","d3","e2","f1","b6","c6","d6","e6","f6","g6","h6","b7","c8"],
     /* a7 :*/ ["a1","a2","a3","a4","a5","a6","a8","b6","c5","d4","e3","f2","g1","b7","c7","d7","e7","f7","g7","h7","b8"],
     /* a8 :*/ ["a1","a2","a3","a4","a5","a6","a7","b7","c6","d5","e4","f3","g2","h1","b8","c8","d8","e8","f8","g8","h8"],
     /* b1 :*/ ["a1","a2","b2","b3","b4","b5","b6","b7","b8","c2","d3","e4","f5","g6","h7","c1","d1","e1","f1","g1","h1"],
     /* b2 :*/ ["a1","a2","a3","b1","b3","b4","b5","b6","b7","b8","c3","d4","e5","f6","g7","h8","c2","d2","e2","f2","g2","h2","c1"],
     /* b3 :*/ ["a2","a3","a4","b1","b2","b4","b5","b6","b7","b8","c4","d5","e6","f7","g8","c3","d3","e3","f3","g3","h3","c2","d1"],
     /* b4 :*/ ["a3","a4","a5","b1","b2","b3","b5","b6","b7","b8","c5","d6","e7","f8","c4","d4","e4","f4","g4","h4","c3","d2","e1"],
     /* b5 :*/ ["a4","a5","a6","b1","b2","b3","b4","b6","b7","b8","c6","d7","e8","c5","d5","e5","f5","g5","h5","c4","d3","e2","f1"],
     /* b6 :*/ ["a5","a6","a7","b1","b2","b3","b4","b5","b7","b8","c7","d8","c6","d6","e6","f6","g6","h6","c5","d4","e3","f2","g1"],
     /* b7 :*/ ["a6","a7","a8","b1","b2","b3","b4","b5","b6","b8","c8","c7","d7","e7","f7","g7","h7","c6","d5","e4","f3","g2","h1"],
     /* b8 :*/ ["a7","a8","b1","b2","b3","b4","b5","b6","b7","c8","d8","e8","f8","g8","h8","c7","d6","e5","f4","g3","h2"],
     /* c1 :*/ ["a1","b1","d1","e1","f1","g1","h1","d2","e3","f4","g5","h6","c2","c3","c4","c5","c6","c7","c8","b2","a3"],
     /* c2 :*/ ["a2","b2","d2","e2","f2","g2","h2","c1","c3","c4","c5","c6","c7","c8","b3","a4","d3","e4","f5","g6","h7","b1","d1"],
     /* c3 :*/ ["a3","b3","d3","e3","f3","g3","h3","c1","c2","c4","c5","c6","c7","c8","b4","a5","d4","e5","f6","g7","h8","b2","a1","d2","e1"],
     /* c4 :*/ ["a4","b4","d4","e4","f4","g4","h4","c1","c2","c3","c5","c6","c7","c8","b5","a6","d5","e6","f7","g8","b3","a2","d3","e2","f1"],
     /* c5 :*/ ["a5","b5","d5","e5","f5","g5","h5","c1","c2","c3","c4","c6","c7","c8","b6","a7","d6","e7","f8","b4","a3","d4","e3","f2","g1"],
     /* c6 :*/ ["a6","b6","d6","e6","f6","g6","h6","c1","c2","c3","c4","c5","c7","c8","b7","a8","d7","e8","b5","a4","d5","e4","f3","g2","h1"],
     /* c7 :*/ ["a7","b7","d7","e7","f7","g7","h7","c1","c2","c3","c4","c5","c6","c8","b8","d8","b6","a5","d6","e5","f4","g3","h2"],
     /* c8 :*/ ["a8","b8","d8","e8","f8","g8","h8","c1","c2","c3","c4","c5","c6","c7","b7","a6","d7","e6","f5","g4","h3"],
     /* d1 :*/ ["a1","b1","c1","c2","b3","a4","d2","d3","d4","d5","d6","d7","d8","e2","f3","g4","h5","e1","f1","g1","h1"],
     /* d2 :*/ ["a2","b2","c2","e1","c3","b4","a5","d1","d3","d4","d5","d6","d7","d8","c1","e3","f4","g5","h6","e2","f2","g2","h2"],
     /* d3 :*/ ["a3","b3","c3","f1","e2","c4","b5","a6","d1","d2","d4","d5","d6","d7","d8","b1","c2","e4","f5","g6","h7","e3","f3","g3","h3"],
     /* d4 :*/ ["a4","b4","c4","g1","f2","e3","c5","b6","a7","d1","d2","d3","d5","d6","d7","d8","a1","b2","c3","e5","f6","g7","h8","e4","f4","g4","h4"],
     /* d5 :*/ ["a5","b5","c5","h1","g2","f3","e4","c6","b7","a8","d1","d2","d3","d4","d6","d7","d8","a2","b3","c4","e6","f7","g8","e5","f5","g5","h5"],
     /* d6 :*/ ["a6","b6","c6","h2","g3","f4","e5","c7","b8","d1","d2","d3","d4","d5","d7","d8","a3","b4","c5","e7","f8","e6","f6","g6","h6"],
     /* d7 :*/ ["a7","b7","c7","h3","g4","f5","e6","c8","d1","d2","d3","d4","d5","d6","d8","a4","b5","c6","e8","e7","f7","g7","h7"],
     /* d8 :*/ ["a8","b8","c8","h4","g5","f6","e7","d1","d2","d3","d4","d5","d6","d7","a5","b6","c7","e8","f8","g8","h8"],
     /* e1 :*/ ["a1","b1","c1","d1","d2","c3","b4","a5","e2","e3","e4","e5","e6","e7","e8","f2","g3","h4","f1","g1","h1"],
     /* e2 :*/ ["a2","b2","c2","d2","f1","d3","c4","b5","a6","e1","e3","e4","e5","e6","e7","e8","d1","f3","g4","h5","f2","g2","h2"],
     /* e3 :*/ ["a3","b3","c3","d3","g1","f2","d4","c5","b6","a7","e1","e2","e4","e5","e6","e7","e8","c1","d2","f4","g5","h6","f3","g3","h3"],
     /* e4 :*/ ["a4","b4","c4","d4","h1","g2","f3","d5","c6","b7","a8","e1","e2","e3","e5","e6","e7","e8","b1","c2","d3","f5","g6","h7","f4","g4","h4"],
     /* e5 :*/ ["a5","b5","c5","d5","h2","g3","f4","d6","c7","b8","e1","e2","e3","e4","e6","e7","e8","a1","b2","c3","d4","f6","g7","h8","f5","g5","h5"],
     /* e6 :*/ ["a6","b6","c6","d6","h3","g4","f5","d7","c8","e1","e2","e3","e4","e5","e7","e8","a2","b3","c4","d5","f7","g8","f6","g6","h6"],
     /* e7 :*/ ["a7","b7","c7","d7","h4","g5","f6","d8","e1","e2","e3","e4","e5","e6","e8","a3","b4","c5","d6","f8","f7","g7","h7"],
     /* e8 :*/ ["a8","b8","c8","d8","h5","g6","f7","e1","e2","e3","e4","e5","e6","e7","a4","b5","c6","d7","f8","g8","h8"],
     /* f1 :*/ ["a1","b1","c1","d1","e1","e2","d3","c4","b5","a6","f2","f3","f4","f5","f6","f7","f8","g2","h3","g1","h1"],
     /* f2 :*/ ["a2","b2","c2","d2","e2","g1","e3","d4","c5","b6","a7","f1","f3","f4","f5","f6","f7","f8","e1","g3","h4","g2","h2"],
     /* f3 :*/ ["a3","b3","c3","d3","e3","h1","g2","e4","d5","c6","b7","a8","f1","f2","f4","f5","f6","f7","f8","d1","e2","g4","h5","g3","h3"],
     /* f4 :*/ ["a4","b4","c4","d4","e4","h2","g3","e5","d6","c7","b8","f1","f2","f3","f5","f6","f7","f8","c1","d2","e3","g5","h6","g4","h4"],
     /* f5 :*/ ["a5","b5","c5","d5","e5","h3","g4","e6","d7","c8","f1","f2","f3","f4","f6","f7","f8","b1","c2","d3","e4","g6","h7","g5","h5"],
     /* f6 :*/ ["a6","b6","c6","d6","e6","h4","g5","e7","d8","f1","f2","f3","f4","f5","f7","f8","a1","b2","c3","d4","e5","g7","h8","g6","h6"],
     /* f7 :*/ ["a7","b7","c7","d7","e7","h5","g6","e8","f1","f2","f3","f4","f5","f6","f8","a2","b3","c4","d5","e6","g8","g7","h7"],
     /* f8 :*/ ["a8","b8","c8","d8","e8","h6","g7","f1","f2","f3","f4","f5","f6","f7","a3","b4","c5","d6","e7","g8","h8"],
     /* g1 :*/ ["a1","b1","c1","d1","e1","f1","f2","e3","d4","c5","b6","a7","g2","g3","g4","g5","g6","g7","g8","h2","h1"],
     /* g2 :*/ ["a2","b2","c2","d2","e2","f2","h1","f3","e4","d5","c6","b7","a8","g1","g3","g4","g5","g6","g7","g8","f1","h3","h2"],
     /* g3 :*/ ["a3","b3","c3","d3","e3","f3","h2","f4","e5","d6","c7","b8","g1","g2","g4","g5","g6","g7","g8","e1","f2","h4","h3"],
     /* g4 :*/ ["a4","b4","c4","d4","e4","f4","h3","f5","e6","d7","c8","g1","g2","g3","g5","g6","g7","g8","d1","e2","f3","h5","h4"],
     /* g5 :*/ ["a5","b5","c5","d5","e5","f5","h4","f6","e7","d8","g1","g2","g3","g4","g6","g7","g8","c1","d2","e3","f4","h6","h5"],
     /* g6 :*/ ["a6","b6","c6","d6","e6","f6","h5","f7","e8","g1","g2","g3","g4","g5","g7","g8","b1","c2","d3","e4","f5","h7","h6"],
     /* g7 :*/ ["a7","b7","c7","d7","e7","f7","h6","f8","g1","g2","g3","g4","g5","g6","g8","a1","b2","c3","d4","e5","f6","h8","h7"],
     /* g8 :*/ ["a8","b8","c8","d8","e8","f8","h7","g1","g2","g3","g4","g5","g6","g7","a2","b3","c4","d5","e6","f7","h8"],
     /* h1 :*/ ["a1","b1","c1","d1","e1","f1","g1","g2","f3","e4","d5","c6","b7","a8","h2","h3","h4","h5","h6","h7","h8"],
     /* h2 :*/ ["a2","b2","c2","d2","e2","f2","g2","g3","f4","e5","d6","c7","b8","h1","h3","h4","h5","h6","h7","h8","g1"],
     /* h3 :*/ ["a3","b3","c3","d3","e3","f3","g3","g4","f5","e6","d7","c8","h1","h2","h4","h5","h6","h7","h8","f1","g2"],
     /* h4 :*/ ["a4","b4","c4","d4","e4","f4","g4","g5","f6","e7","d8","h1","h2","h3","h5","h6","h7","h8","e1","f2","g3"],
     /* h5 :*/ ["a5","b5","c5","d5","e5","f5","g5","g6","f7","e8","h1","h2","h3","h4","h6","h7","h8","d1","e2","f3","g4"],
     /* h6 :*/ ["a6","b6","c6","d6","e6","f6","g6","g7","f8","h1","h2","h3","h4","h5","h7","h8","c1","d2","e3","f4","g5"],
     /* h7 :*/ ["a7","b7","c7","d7","e7","f7","g7","g8","h1","h2","h3","h4","h5","h6","h8","b1","c2","d3","e4","f5","g6"],
     /* h8 :*/ ["a8","b8","c8","d8","e8","f8","g8","h1","h2","h3","h4","h5","h6","h7","a1","b2","c3","d4","e5","f6","g7"],
   ],



   [ // KING
     /* a1 :*/ ["a2","b2","b1"],
     /* a2 :*/ ["a1","b1","b2","b3","a3"],
     /* a3 :*/ ["a2","b2","b3","b4","a4"],
     /* a4 :*/ ["a3","b3","b4","b5","a5"],
     /* a5 :*/ ["a4","b4","b5","b6","a6"],
     /* a6 :*/ ["a5","b5","b6","b7","a7"],
     /* a7 :*/ ["a6","b6","b7","b8","a8"],
     /* a8 :*/ ["a7","b7","b8"],
     /* b1 :*/ ["a1","a2","b2","c2","c1"],
     /* b2 :*/ ["a1","a2","a3","b3","c3","c2","c1","b1"],
     /* b3 :*/ ["a2","a3","a4","b4","c4","c3","c2","b2"],
     /* b4 :*/ ["a3","a4","a5","b5","c5","c4","c3","b3"],
     /* b5 :*/ ["a4","a5","a6","b6","c6","c5","c4","b4"],
     /* b6 :*/ ["a5","a6","a7","b7","c7","c6","c5","b5"],
     /* b7 :*/ ["a6","a7","a8","b8","c8","c7","c6","b6"],
     /* b8 :*/ ["a8","a7","b7","c7","c8"],
     /* c1 :*/ ["b1","b2","c2","d2","d1"],
     /* c2 :*/ ["b1","b2","b3","c3","d3","d2","d1","c1"],
     /* c3 :*/ ["b2","b3","b4","c4","d4","d3","d2","c2"],
     /* c4 :*/ ["b3","b4","b5","c5","d5","d4","d3","c3"],
     /* c5 :*/ ["b4","b5","b6","c6","d6","d5","d4","c4"],
     /* c6 :*/ ["b5","b6","b7","c7","d7","d6","d5","c5"],
     /* c7 :*/ ["b6","b7","b8","c8","d8","d7","d6","c6"],
     /* c8 :*/ ["b8","b7","c7","d7","d8"],
     /* d1 :*/ ["c1","c2","d2","e2","e1"],
     /* d2 :*/ ["c1","c2","c3","d3","e3","e2","e1","d1"],
     /* d3 :*/ ["c2","c3","c4","d4","e4","e3","e2","d2"],
     /* d4 :*/ ["c3","c4","c5","d5","e5","e4","e3","d3"],
     /* d5 :*/ ["c4","c5","c6","d6","e6","e5","e4","d4"],
     /* d6 :*/ ["c5","c6","c7","d7","e7","e6","e5","d5"],
     /* d7 :*/ ["c6","c7","c8","d8","e8","e7","e6","d6"],
     /* d8 :*/ ["c8","c7","d7","e7","e8"],
     /* e1 :*/ ["d1","d2","e2","f2","f1"],
     /* e2 :*/ ["d1","d2","d3","e3","f3","f2","f1","e1"],
     /* e3 :*/ ["d2","d3","d4","e4","f4","f3","f2","e2"],
     /* e4 :*/ ["d3","d4","d5","e5","f5","f4","f3","e3"],
     /* e5 :*/ ["d4","d5","d6","e6","f6","f5","f4","e4"],
     /* e6 :*/ ["d5","d6","d7","e7","f7","f6","f5","e5"],
     /* e7 :*/ ["d6","d7","d8","e8","f8","f7","f6","e6"],
     /* e8 :*/ ["d8","d7","e7","f7","f8"],
     /* f1 :*/ ["e1","e2","f2","g2","g1"],
     /* f2 :*/ ["e1","e2","e3","f3","g3","g2","g1","f1"],
     /* f3 :*/ ["e2","e3","e4","f4","g4","g3","g2","f2"],
     /* f4 :*/ ["e3","e4","e5","f5","g5","g4","g3","f3"],
     /* f5 :*/ ["e4","e5","e6","f6","g6","g5","g4","f4"],
     /* f6 :*/ ["e5","e6","e7","f7","g7","g6","g5","f5"],
     /* f7 :*/ ["e6","e7","e8","f8","g8","g7","g6","f6"],
     /* f8 :*/ ["e8","e7","f7","g7","g8"],
     /* g1 :*/ ["f1","f2","g2","h2","h1"],
     /* g2 :*/ ["f1","f2","f3","g3","h3","h2","h1","g1"],
     /* g3 :*/ ["f2","f3","f4","g4","h4","h3","h2","g2"],
     /* g4 :*/ ["f3","f4","f5","g5","h5","h4","h3","g3"],
     /* g5 :*/ ["f4","f5","f6","g6","h6","h5","h4","g4"],
     /* g6 :*/ ["f5","f6","f7","g7","h7","h6","h5","g5"],
     /* g7 :*/ ["f6","f7","f8","g8","h8","h7","h6","g6"],
     /* g8 :*/ ["f8","f7","g7","h7","h8"],
     /* h1 :*/ ["g1","g2","h2"],
     /* h2 :*/ ["h1","g1","g2","g3","h3"],
     /* h3 :*/ ["h2","g2","g3","g4","h4"],
     /* h4 :*/ ["h3","g3","g4","g5","h5"],
     /* h5 :*/ ["h4","g4","g5","g6","h6"],
     /* h6 :*/ ["h5","g5","g6","g7","h7"],
     /* h7 :*/ ["h6","g6","g7","g8","h8"],
     /* h8 :*/ ["g8","g7","h7"],
   ],



   [ // WHITE PAWN
     /* a1 :*/ [""],
     /* a2 :*/ ["a3","a4","b3"],
     /* a3 :*/ ["a4","b4"],
     /* a4 :*/ ["a5","b5"],
     /* a5 :*/ ["a6","b6"],
     /* a6 :*/ ["a7","b7"],
     /* a7 :*/ ["a8","b8"],
     /* a8 :*/ [""],
     /* b1 :*/ [""],
     /* b2 :*/ ["a3","b3","b4","c3"],
     /* b3 :*/ ["a4","b4","c4"],
     /* b4 :*/ ["a5","b5","c5"],
     /* b5 :*/ ["a6","b6","c6"],
     /* b6 :*/ ["a7","b7","c7"],
     /* b7 :*/ ["a8","b8","c8"],
     /* b8 :*/ [""],
     /* c1 :*/ [""],
     /* c2 :*/ ["b3","c3","c4","d3"],
     /* c3 :*/ ["b4","c4","d4"],
     /* c4 :*/ ["b5","c5","d5"],
     /* c5 :*/ ["b6","c6","d6"],
     /* c6 :*/ ["b7","c7","d7"],
     /* c7 :*/ ["b8","c8","d8"],
     /* c8 :*/ [""],
     /* d1 :*/ [""],
     /* d2 :*/ ["c3","d3","d4","e3"],
     /* d3 :*/ ["c4","d4","e4"],
     /* d4 :*/ ["c5","d5","e5"],
     /* d5 :*/ ["c6","d6","e6"],
     /* d6 :*/ ["c7","d7","e7"],
     /* d7 :*/ ["c8","d8","e8"],
     /* d8 :*/ [""],
     /* e1 :*/ [""],
     /* e2 :*/ ["d3","e3","e4","f3"],
     /* e3 :*/ ["d4","e4","f4"],
     /* e4 :*/ ["d5","e5","f5"],
     /* e5 :*/ ["d6","e6","f6"],
     /* e6 :*/ ["d7","e7","f7"],
     /* e7 :*/ ["d8","e8","f8"],
     /* e8 :*/ [""],
     /* f1 :*/ [""],
     /* f2 :*/ ["e3","f3","f4","g3"],
     /* f3 :*/ ["e4","f4","g4"],
     /* f4 :*/ ["e5","f5","g5"],
     /* f5 :*/ ["e6","f6","g6"],
     /* f6 :*/ ["e7","f7","g7"],
     /* f7 :*/ ["e8","f8","g8"],
     /* f8 :*/ [""],
     /* g1 :*/ [""],
     /* g2 :*/ ["f3","g3","g4","h3"],
     /* g3 :*/ ["f4","g4","h4"],
     /* g4 :*/ ["f5","g5","h5"],
     /* g5 :*/ ["f6","g6","h6"],
     /* g6 :*/ ["f7","g7","h7"],
     /* g7 :*/ ["f8","g8","h8"],
     /* g8 :*/ [""],
     /* h1 :*/ [""],
     /* h2 :*/ ["h3","g3","h4"],
     /* h3 :*/ ["g4","h4"],
     /* h4 :*/ ["g5","h5"],
     /* h5 :*/ ["g6","h6"],
     /* h6 :*/ ["g7","h7"],
     /* h7 :*/ ["g8","h8"],
     /* h8 :*/ [""],
   ],



   [ // BLACK PAWN
     /* a1 :*/ [""],
     /* a2 :*/ ["b1","a1"],
     /* a3 :*/ ["b2","a2"],
     /* a4 :*/ ["b3","a3"],
     /* a5 :*/ ["b4","a4"],
     /* a6 :*/ ["b5","a5"],
     /* a7 :*/ ["b6","a6","a5"],
     /* a8 :*/ [""],
     /* b1 :*/ [""],
     /* b2 :*/ ["a1","b1","c1"],
     /* b3 :*/ ["a2","b2","c2"],
     /* b4 :*/ ["a3","b3","c3"],
     /* b5 :*/ ["a4","b4","c4"],
     /* b6 :*/ ["a5","b5","c5"],
     /* b7 :*/ ["a6","b6","b5","c6"],
     /* b8 :*/ [""],
     /* c1 :*/ [""],
     /* c2 :*/ ["b1","c1","d1"],
     /* c3 :*/ ["b2","c2","d2"],
     /* c4 :*/ ["b3","c3","d3"],
     /* c5 :*/ ["b4","c4","d4"],
     /* c6 :*/ ["b5","c5","d5"],
     /* c7 :*/ ["b6","c6","c5","d6"],
     /* c8 :*/ [""],
     /* d1 :*/ [""],
     /* d2 :*/ ["c1","d1","e1"],
     /* d3 :*/ ["c2","d2","e2"],
     /* d4 :*/ ["c3","d3","e3"],
     /* d5 :*/ ["c4","d4","e4"],
     /* d6 :*/ ["c5","d5","e5"],
     /* d7 :*/ ["c6","d6","d5","e6"],
     /* d8 :*/ [""],
     /* e1 :*/ [""],
     /* e2 :*/ ["d1","e1","f1"],
     /* e3 :*/ ["d2","e2","f2"],
     /* e4 :*/ ["d3","e3","f3"],
     /* e5 :*/ ["d4","e4","f4"],
     /* e6 :*/ ["d5","e5","f5"],
     /* e7 :*/ ["d6","e6","e5","f6"],
     /* e8 :*/ [""],
     /* f1 :*/ [""],
     /* f2 :*/ ["e1","f1","g1"],
     /* f3 :*/ ["e2","f2","g2"],
     /* f4 :*/ ["e3","f3","g3"],
     /* f5 :*/ ["e4","f4","g4"],
     /* f6 :*/ ["e5","f5","g5"],
     /* f7 :*/ ["e6","f6","f5","g6"],
     /* f8 :*/ [""],
     /* g1 :*/ [""],
     /* g2 :*/ ["f1","g1","h1"],
     /* g3 :*/ ["f2","g2","h2"],
     /* g4 :*/ ["f3","g3","h3"],
     /* g5 :*/ ["f4","g4","h4"],
     /* g6 :*/ ["f5","g5","h5"],
     /* g7 :*/ ["f6","g6","g5","h6"],
     /* g8 :*/ [""],
     /* h1 :*/ [""],
     /* h2 :*/ ["g1","h1"],
     /* h3 :*/ ["g2","h2"],
     /* h4 :*/ ["g3","h3"],
     /* h5 :*/ ["g4","h4"],
     /* h6 :*/ ["g5","h5"],
     /* h7 :*/ ["g6","h6","h5"],
     /* h8 :*/ [""],
   ],

 ];
