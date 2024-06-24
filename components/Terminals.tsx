"use client";
import { useEffect, useState } from "react";

const Terminal = () => {
  const [displayText, setDisplayText] = useState("");
  const text =
    "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM#^`?TMMMMMMMMMMMMMMMMMMMMHMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMM#HMMMMF`?TMMMMM77YMMMMMMMM#MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMb    dMMMMMMMMMMMMMMMMMF   HM''WMMMMMMMMMMMMMMMMMM#MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMHMMM\nM#TMMMM'  ,MMM[   MMMMF  .MMMMMMM#  .TMMMMMMMMMMMMMMMMMMMM#WWWWWWWBYTWWWW'!   .MMMMMN,...      ..MM'!!`  `?'HMMMMM#   TMMMMMMMMMMMMMMMMMMMB77'MM#v?777777''''  .MM\nMMMa,7=   .M#'    ''''`   'TMMMMM#    MMMMMMMM=_TMMMMMMMMMN&&&&gggggggggggggggMMMMMMMMMM]   `  ,'MMMNgNNN!  .MMMMMN    dMMMMMMM'_TMMMMMMM#     MMMMMM_  d   MMMMMM\nMMMMM`   .dMMMb   jMMMe  .MMMMMMMN.   dMMMMM9'   .MMMMMMMMMMM''777??!_.   .WMMMMMMM#^``_?        .M''MMM!  .dMMMMMM,   JMMMMM9^   .MMMMMMMNg-.dMMMMMM_  d   MMMMMM\nMMM#^    dMMMMMN..MMMMMMMMMMMMMMMMb   dM#'` ..gMMMMMMMMMMMMMN     MMMMF    JMMMMMMMMMNNNMF   .NMMM]   Mb   ,MMMMMMMb   JM#'` ..&MMMMMMMMMMMMMMMM#'WMB   d   MMMMMM\nH'`  .   ,MMD!`  .., (gg, 7WMMMMMMME    ..NMMMMMMMMMMMMMMMMMM.    MMMMF    JMMMMMMMMMMMM3  .dMMMMM)   JMN   ,MMMMMMM#    ..gMMMMMMMMMMM!   ?MMMM   M#   g.  j,  ,M\n&..gMM]   dN    JMMF .MM}   dMMMMM^   .MMMMMMMMMMMMMMMMMMMMMM~    T'''t    JMMMMMMMMM'=    T''WMMM)   JM%   .MMMMMM=   .MMMMMMMMMMMMMMMa,. .MMMM   dF  .M]  JF  .M\nMMMMM'    ,N    MMM% ,MM`   ,MMM#    MMMMMMMMMMMMMMMMMMMMMMMMm++++.  .+++++MMMMMMM#  ..    .a   UM]   JMMMMMMMMMMM`   dMMMMMMMMMMMMMMMMMMMMMMMMM   J!  .MN. .F  .M\nMM9' .,    N    ggg_ .ge    ,MMM]    MMMMMMMMMMMMMMMMMMMMMMM''TMMM;  .MMM'77TMMMMMMMMMM          M]   JMMMMMMMMMMF    MMMMMMMMMMMMMMMMMMMMMMD .M   (  .MMMN..]  .M\nNgggMM#    M,   JMM  (M#    JMMMN.   /MMMMMMMMMMMMMMMMMMMMMF  .MMM[   MMMN,  .MMMMMMMMN    ,M`   M]   ,MMMMMMMMMMN,   ,HMMMMMMMMMMMMMMMMMM#! .MM   ,'''''''''$  .M\nMMMMMM#    MN.   H9  7'    .MMMMMMa...... `    .MMMMMMMMM'`..JMMMM:   MMMMMa..JMMMMMMMMx    `   .M]   -MMMMMMMMMMMMN...... `    .MMMMMMMM'  .MMM   ,MMMMMMMMMF  .M\nMMMMM/`   .MMMNNNggggMMMNggMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM5....MMMMMMMMMMMMMMMMMMMMMNNgggMMN  .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM#!  .MMMM   ,'''''''''t  .M\nMMMMMMNggMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMMMMMMNNNMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM";

  const [index, setIndex] = useState(0);

  // 全体の記事数とかを表示
  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 1);

      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <div className="mx-auto my-16">
      <div className="bg-gray-800 text-white font-mono p-2 rounded-t-lg flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm">kyoto-kanko -- -zsh -- 80x24</div>
        <div></div>
      </div>
      <div className="bg-black text-green-500 font-mono p-4 rounded-b-lg whitespace-pre text-xs text-center h-72">
        {displayText}
      </div>
    </div>
  );
};

export default Terminal;
