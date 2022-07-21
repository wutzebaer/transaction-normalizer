docker build --no-cache -t wutzebaer/transaction-normalizer:1.0 .
docker push wutzebaer/transaction-normalizer:1.0
docker run --rm wutzebaer/transaction-normalizer normalize.js 84a600818258202f22541e1375b274d23b175993b5458330bfbb75a80cb342a24c48dfa7de5f2b01018282583901005d2c590fb0423024a39c9c8229625c9c97e5b881724435043212a4e1da00e789af1cc9bc9e613a044a8c4e08cd3dfcc296fb32af2458eb1a001b3d2b82583901b5f65425e117c7101beb3ddf780cc800835234addb63eb96636eda48600292ec28932b1feea9101d43fc4812ae8e0848bd40479e29b60e80821a00bf3cf6a8581c1b145ba689bcdf4d2d278d2586b93328334daa95d1aeb1931adc655ba3505468654d616e6472696c6c7a3539303701505468654d616e6472696c6c7a3631323501505468654d616e6472696c6c7a3635393401581c38bc6394108d4225fb8c5a4cb96ba1fc17992ecc00141981038bb69ba845434f5245310145434f5245320145434f5245330145434f5245340145434f5245350145434f5245360145434f5245370145434f52453801581c40fce5d09de7b300e7419e13064cecb5ccaa3cc11ebac760e4ca5b4da144434f524502581c50883f7dfc246ea46c581ea62b8ea9a91308447d6d3770c369ff3627a144434f52450a581c8f9e32b1bb3e259285c2c46a3fded23a258777dfb81f38303091620ea145434f52453105581cc843f24f8ba3f274ab5bcc3a7b994f961d519b8a9ba5b0f737b43968a845434f5245310145434f5245320145434f5245330145434f5245340145434f5245350145434f5245360145434f5245370145434f52453801581cd2bf4eeb0a28fb75e2f76579ce86b714e0286da54094ddfea1d8e959a645434f5245310145434f5245320145434f5245350245434f5245360245434f5245370145434f52453801581ce9b845669fe2b44c5ca38425dc1f544c9071acd00a1369b68d1505ffa645434f5245310145434f5245320145434f5245330145434f5245340145434f5245350145434f52453601021a00034755031a03f7dd4e09a1581c8f9e32b1bb3e259285c2c46a3fded23a258777dfb81f38303091620ea145434f5245310107582053e25f349cf031f21ee98909259c32028bffc3c138b54f2203175efe617659d3a200818258203367fa88bdce266625cd92819037b0abea62adc00e2e5b30e3b834009e3d7f8f584011b3c8f0a8ec969bceb35873da206b5ac28a558c265021e24d590f6cf1f544ed49454cb21a42fe7352ff1018328c9f3255f12a93e6455b17e40745fd628db909018182018282051a05d34ed68200581ca3f1e4508c0d8b990c61145a1cfd30c6dfb70a7d0b915fea459925ebf5d90103a100a21902d1a278383866396533326231626233653235393238356332633436613366646564323361323538373737646662383166333833303330393136323065a165434f524531a265696d6167657835697066733a2f2f516d5a75625855433968365467445a3969456261646a4a584e53783637524c346f524b43517356507a75686a6156646e616d6565434f5245316776657273696f6e63312e3019138881a36961737365744e616d6565434f52453164736c6f741a03f7dd4e6a757365644472696c6c7a81705468654d616e6472696c6c7a35393037