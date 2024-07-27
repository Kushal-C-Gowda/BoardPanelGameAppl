({
    doInit: function(component, event, helper) {
        console.log("Initialization completed");
        const gamemode = component.get("v.mode");
        let column = 0;
        if (gamemode && gamemode === "hard") {
            column = 6;
        } else if (gamemode === "medium") {
            column = 4;
        } else {
            column = 3;
        }

        //get block width/size
        let blockSize = 12 / column;
        component.set("v.blockSize", blockSize);

        const words = helper.getWords(column * column);
        component.set("v.words", words);
        console.log("words: " + words);
        //get win word
        const WinWord = helper.getWinWord(words);
        component.set("v.WinWord", WinWord);
        console.log("WinWord: " + WinWord); // Added log to verify WinWord
        //reset the board
        helper.resetBoard(component);
    },

    doRender: function(component, event, helper) {
        console.log("Render completed");
    },

    blockClickHandler: function(component, event, helper) {
        let clickCount = component.get("v.clickCount") + 1;
        component.set("v.clickCount", clickCount);

        //get event value
        const value = event.getParam("value");
        console.log("Clicked value: " + value); // Added log to verify clicked value
        console.log("WinWord: " + component.get("v.WinWord")); // Added log to verify WinWord at click time

        if (value === component.get("v.WinWord")) {
            //user has won
            component.set("v.result", "YOU WIN");
            console.log("YOU WIN");
            helper.disabledBoard(component);
            helper.fireResultEvent("win");

        } else if (clickCount === 3) {
            //user lose
            component.set("v.result", "YOU LOSE");
            console.log("YOU LOSE");
            helper.disabledBoard(component);
            helper.fireResultEvent("lose");
        }
        // set click count
        component.set("v.clickCount",clickCount);
    },
    reshuffleBoard: function(component, event, helper){
        const words = component.get("v.words");
        const randomizedWords = helper.randomizeArray(words);
        component.set("v.words", randomizedWords);
        helper.resetBoard(component);

        
    }
})
