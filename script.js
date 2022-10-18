function ten() {
    console.log("ten");
    function nine() {
        console.log("nine");
        function eight() {
            console.log("eight");
            function seven() {
                console.log("seven");
                function six() {
                    console.log("six");
                    function five() {
                        console.log("five");
                        function four() {
                            console.log("four");
                            function three() {
                                console.log("three");
                                function two() {
                                    console.log("two");
                                    function one() {
                                        console.log("one");
                                        setTimeout(() => {
                                            console.log("happy independece day");
                                        }, 1000)
                                    }
                                    one();
                                }
                                two()
                            }
                            three()
                        }
                        four() 
                    }
                    five() 
                }
                six();
            }
            seven();
        }
        eight();
    }
    nine();
}


ten();