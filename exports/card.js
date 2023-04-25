let f = (data) => {
  return {
    color: data[0],
value: data[1],
action: data[2],

  };
};


        /*
        * Game Constants
        */
        
        const NUGGETS = 'nuggets';
const YELLOW = 'yellow';
const PURPLE = 'purple';
const GREEN = 'green';
const BLUE = 'blue';
const GREY = 'grey';
const RED = 'red';
const CARDS = 'cards';
const CHECK = 'check';


// prettier-ignore
const CARDS_DATA = {
    1 : $f([GREEN, 1, NUGGETS]),
2 : $f([GREEN, 1, NUGGETS]),
3 : $f([GREEN, 1, NUGGETS]),
4 : $f([GREEN, 1, NUGGETS]),
5 : $f([GREEN, 2, NUGGETS]),
6 : $f([GREEN, 2, NUGGETS]),
7 : $f([GREEN, 2, NUGGETS]),
8 : $f([GREEN, 2, NUGGETS]),
9 : $f([GREEN, 3, NUGGETS]),
10 : $f([GREEN, 3, NUGGETS]),
11 : $f([GREEN, 3, NUGGETS]),
12 : $f([GREEN, 3, NUGGETS]),
13 : $f([RED, 1, NUGGETS]),
14 : $f([RED, 1, NUGGETS]),
15 : $f([RED, 1, NUGGETS]),
16 : $f([RED, 1, NUGGETS]),
17 : $f([RED, 2, NUGGETS]),
18 : $f([RED, 2, NUGGETS]),
19 : $f([RED, 2, NUGGETS]),
20 : $f([RED, 2, NUGGETS]),
21 : $f([RED, 3, NUGGETS]),
22 : $f([RED, 3, NUGGETS]),
23 : $f([RED, 3, NUGGETS]),
24 : $f([RED, 3, NUGGETS]),
25 : $f([BLUE, 1, CHECK]),
26 : $f([BLUE, 1, CHECK]),
27 : $f([BLUE, 1, CHECK]),
28 : $f([BLUE, 1, CHECK]),
29 : $f([BLUE, 1, CHECK]),
30 : $f([BLUE, 2, CHECK]),
31 : $f([BLUE, 2, CHECK]),
32 : $f([BLUE, 2, CHECK]),
33 : $f([BLUE, 2, CHECK]),
34 : $f([BLUE, 2, CHECK]),
35 : $f([BLUE, 3, CHECK]),
36 : $f([BLUE, 3, CHECK]),
37 : $f([BLUE, 3, CHECK]),
38 : $f([BLUE, 3, CHECK]),
39 : $f([BLUE, 3, CHECK]),
40 : $f([YELLOW, 1, CHECK]),
41 : $f([YELLOW, 1, CHECK]),
42 : $f([YELLOW, 1, CHECK]),
43 : $f([YELLOW, 1, CHECK]),
44 : $f([YELLOW, 1, CHECK]),
45 : $f([YELLOW, 2, CHECK]),
46 : $f([YELLOW, 2, CHECK]),
47 : $f([YELLOW, 2, CHECK]),
48 : $f([YELLOW, 2, CHECK]),
49 : $f([YELLOW, 2, CHECK]),
50 : $f([YELLOW, 3, CHECK]),
51 : $f([YELLOW, 3, CHECK]),
52 : $f([YELLOW, 3, CHECK]),
53 : $f([YELLOW, 3, CHECK]),
54 : $f([YELLOW, 3, CHECK]),
55 : $f([PURPLE, 1, CARDS]),
56 : $f([PURPLE, 1, CARDS]),
57 : $f([PURPLE, 1, CARDS]),
58 : $f([PURPLE, 1, CARDS]),
59 : $f([PURPLE, 2, CARDS]),
60 : $f([PURPLE, 2, CARDS]),
61 : $f([PURPLE, 2, CARDS]),
62 : $f([PURPLE, 2, CARDS]),
63 : $f([PURPLE, 3, CARDS]),
64 : $f([PURPLE, 3, CARDS]),
65 : $f([PURPLE, 3, CARDS]),
66 : $f([PURPLE, 3, CARDS]),
67 : $f([GREY, 1, CARDS]),
68 : $f([GREY, 1, CARDS]),
69 : $f([GREY, 1, CARDS]),
70 : $f([GREY, 1, CARDS]),
71 : $f([GREY, 2, CARDS]),
72 : $f([GREY, 2, CARDS]),
73 : $f([GREY, 2, CARDS]),
74 : $f([GREY, 2, CARDS]),
75 : $f([GREY, 3, CARDS]),
76 : $f([GREY, 3, CARDS]),
77 : $f([GREY, 3, CARDS]),
78 : $f([GREY, 3, CARDS]),

};
