function getBattingStrikeRate() {
    // This function gets the strike rate of a batter: runs scored / balls faced * 100
    var output = document.getElementById("output"); // The output element to display the strike rate
    var runsScored = parseInt(prompt("Input the number of runs scored by the batter")); // This prompt gets the runs scored by the batter
    var ballsFaced = parseInt(prompt("Input the number of balls faced by the batter")); // This prompt gets the number of balls faced by the batter
    var battingSR = (runsScored / ballsFaced) * 100; // The calculation of strike rate: runs scored over the balls faced, multiplied by 100
    document.getElementById("battingSR").innerHTML = "Batting Strike Rate: " + battingSR.toFixed(2); // Updating the HTML element with the batting strike rate
    output.innerHTML = "Batting Strike Rate: " + battingSR.toFixed(2); // Displaying the batting strike rate
}

function getBattingAverage() {
    // This function gets the batting average of a batter: runs scored / dismissals
    var output = document.getElementById("output"); // The output element to display the batting average
    var runsScored = parseInt(prompt("Input the number of runs scored by the batter")); // This prompt gets the runs scored by the batter
    var dismissals = parseInt(prompt("Input the number of times the batter has been dismissed")); // This prompt gets the number of dismissals of the batter
    var average = (runsScored / dismissals).toFixed(2); //The batting average is the runs scored divided by the dismissals
    document.getElementById("battingAvg").innerHTML = "Batting Average: " + average; // Updating the HTML element with the batting average
    output.innerHTML = "Batting Average: " + average; // Displaying the batting average
}

function getBowlingAverage() {
    // This function gets the bowling average of a bowler: runs conceded / wickets taken
    var output = document.getElementById("output"); // The output element to display the bowling average
    var runsConceded = parseInt(prompt("Input the number of runs conceded by the bowler")); // This prompt gets the runs conceded by the bowler
    var wicketsTaken = parseInt(prompt("Input the number of wickets taken by the bowler")); // This prompt gets the number of wickets taken by the bowler
    var avg = (runsConceded / wicketsTaken); // The calculation of bowling average: runs conceded over wickets taken
    document.getElementById("bowlingAvg").innerHTML = "Bowling Average: " + avg.toFixed(2); // Updating the HTML element with the bowling average
    output.innerHTML = "Bowling Average: " + avg.toFixed(2); // Displaying the bowling average
}

function getBowlingStrikeRate() {
    // This function gets the strike rate of a bowler: balls bowled / wickets taken
    var output = document.getElementById("output"); // The output element to display the bowling strike rate
    var ballsBowled = parseInt(prompt("Input the number of balls bowled by the bowler")); // This prompt gets the number of balls bowled by the bowler
    var wicketsTaken = parseInt(prompt("Input the number of wickets taken by the bowler")); // This prompt gets the number of wickets taken by the bowler
    var strikeRate = (ballsBowled / wicketsTaken); // The calculation of bowling strike rate: ballws bowled over the wickets taken
    document.getElementById("bowlingSR").innerHTML = "Bowling Strike Rate: " + strikeRate.toFixed(2); // Updating the HTML element with the bowling strike rate
    output.innerHTML = "Bowling Strike Rate: " + strikeRate.toFixed(2); // Displaying the bowling strike rate
}

function getEconomyRate() {
    // This function gets the economy rate of a bowler: runs conceded / overs bowled
    var output = document.getElementById("output"); // The output element to display the economy rate
    var runsConceded = parseInt(prompt("Input the number of runs conceded by the bowler")); // This prompt gets the runs conceded by the bowler
    var bowlsBowled = parseInt(prompt("Input the number of balls bowled by the bowler")); // This prompt gets the number of balls bowled by the bowler
    var economyRate = (runsConceded / (bowlsBowled / 6)); // The calculation of economy rate: runs conceded divided by the overs bowled (dividing the balls bowled by 6, to get an accurate representation of how many overs were bowled)
    document.getElementById("economyRate").innerHTML = "Economy Rate: " + economyRate.toFixed(2); // Updating the HTML element with the economy rate
    output.innerHTML = "Economy Rate: " + economyRate.toFixed(2); // Displaying the economy rate
}

function getNRR() {
    // This function calculates the Net Run Rate (NRR) for a cricket match: the difference between the run rate of the 2 teams
    var output = document.getElementById("output"); // The output element to display the Net Run Rate
    var runsScoredFor = parseInt(prompt("Input the number of runs scored by Team 1 (FOR)")); // This prompt gets the runs scored by Team 1
    var oversFor = parseInt(prompt("Input the number of overs faced in full by Team 1 (FOR). If partial overs have been done (such as 47.2), then just consider 47.")); // This prompt gets the number of voers faced by first team
    var extras = parseInt(prompt("How many balls of the not fully completed over were faced?")); // This prompt gets the additonal balls faced of the not fully completed over (2 balls in the case of the 47.2 overs example)
    var runsScoredAgainst = parseInt(prompt("Input the number of runs scored by Team 2 (AGAINST)")); // This prompt gets the runs scored by Team 2 
    var oversAgainst = parseInt(prompt("Input the number of maximum overs that could be faced by Team 2 (AGAINST). So, if a game had them all out for 47 overs, 50 will still be the value taken.")); // This prompt gets the maximum overs that could be faced by Team 2, so whether they batted a full 50 overs, or lost all 10 wickets in 47 overs, it'll be 50 for that given game
    var oversForTotal = (oversFor*6 + extras)/6; // This calculation is converts the overs faced by Team 1 into an eligible value, for calcuation purposes
    var forRR = runsScoredFor/oversForTotal; // This calcuation is the run rate of Team 1, or the FOR team
    var againstRR = runsScoredAgainst/oversAgainst; // This calculation is the run rate of Team 2, or the AGAINST team
    var nrr = forRR - againstRR; // This calcuation is the NRR: for - against
    document.getElementById("nrr").innerHTML = "Net Run Rate: " + nrr.toFixed(3); // Updating the HTML element with the NRR
    output.innerHTML = "Net Run Rate: " + nrr.toFixed(3); // Displaying the NRR
}

function resources(wicketsLost, oversRemaining) {
    //This function returns the resources for identifying DLS targets
    const dlsResources = {
    0: [3.6, 7.2, 10.6, 13.9, 17.2, 20.3, 23.4, 26.4, 29.3, 32.1, 34.9, 37.6, 40.2, 42.7, 45.2, 47.6, 49.9, 52.2, 54.4, 56.6, 58.7, 60.7, 62.7, 64.6, 66.5, 68.3, 70.1, 71.8, 73.5, 75.1, 76.7, 78.3, 79.8, 81.3, 82.7, 84.1, 85.4, 86.7, 88.0, 89.3, 90.5, 91.7, 92.8, 93.9, 95.0, 96.1, 97.1, 98.1, 99.1, 100.0], //0 wickets lost
    1: [3.6, 7.1, 10.5, 13.8, 17.0, 20.1, 23.1, 26.0, 28.9, 31.6, 34.2, 36.8, 39.3, 41.7, 44.1, 46.3, 48.5, 50.7, 52.8, 54.8, 56.7, 58.6, 60.4, 62.2, 63.9, 65.6, 67.2, 68.8, 70.3, 71.8, 73.2, 74.6, 75.9, 77.2, 78.5, 79.7, 80.9, 82.0, 83.1, 84.2, 85.3, 86.3, 87.3, 88.2, 89.1, 90.0, 90.9, 91.7, 92.6, 93.4], //1 wicket lost
    2: [3.6, 7.1, 10.4, 13.7, 16.8, 19.8, 22.7, 25.5, 28.2, 30.8, 33.4, 35.8, 38.1, 40.4, 42.6, 44.7, 46.7, 48.6, 50.5, 52.4, 54.1, 55.8, 57.4, 59.0, 60.5, 62.0, 63.4, 64.8, 66.1, 67.3, 68.6, 69.7, 70.9, 72.0, 73.0, 74.1, 75.0, 76.0, 76.9, 77.8, 78.7, 79.5, 80.3, 81.0, 81.8, 82.5, 83.2, 83.8, 84.5, 85.1], //2 wickets lost
    3: [3.6, 7.0, 10.3, 13.5, 16.5, 19.4, 22.2, 24.8, 27.4, 29.8, 32.1, 34.3, 36.5, 38.5, 40.5, 42.3, 44.1, 45.9, 47.5, 49.1, 50.6, 52.0, 53.4, 54.7, 56.0, 57.2, 58.4, 59.5, 60.5, 61.6, 62.5, 63.5, 64.4, 65.2, 66.0, 66.8, 67.6, 68.3, 69.0, 69.6, 70.3, 70.9, 71.4, 72.0, 72.5, 73.0, 73.5, 74.0, 74.4, 74.9], //3 wickets lost
    4: [3.6, 7.0, 10.2, 13.2, 16.1, 18.8, 21.4, 23.8, 26.1, 28.3, 30.4, 32.3, 34.2, 35.9, 37.6, 39.1, 40.6, 42.0, 43.4, 44.6, 45.8, 47.0, 48.0, 49.0, 50.0, 50.9, 51.8, 52.6, 53.4, 54.1, 54.8, 55.4, 56.0, 56.6, 57.2, 57.7, 58.2, 58.7, 59.1, 59.5, 59.9, 60.3, 60.7, 61.0, 61.3, 61.6, 61.9, 62.2, 62.5, 62.7], //4 wickets lost
    5: [3.5, 6.8, 9.9, 12.7, 15.4, 17.8, 20.1, 22.3, 24.2, 26.1, 27.8, 29.4, 30.8, 32.2, 33.5, 34.7, 35.8, 36.8, 37.7, 38.6, 39.4, 40.2, 40.9, 41.6, 42.2, 42.8, 43.3, 43.8, 44.2, 44.7, 45.1, 45.4, 45.8, 46.1, 46.4, 46.6, 46.9, 47.1, 47.4, 47.6, 47.8, 47.9, 48.1, 48.3, 48.4, 48.5, 48.6, 48.8, 48.9, 49.0], //5 wickets lost
    6: [3.5, 6.6, 9.5, 12.0, 14.3, 16.4, 18.2, 19.9, 21.4, 22.8, 24.0, 25.1, 26.1, 27.0, 27.8, 28.5, 29.2, 29.8, 30.3, 30.8, 31.2, 31.6, 32.0, 32.3, 32.6, 32.8, 33.0, 33.2, 33.4, 33.6, 33.7, 33.9, 34.0, 34.1, 34.2, 34.3, 34.4, 34.5, 34.5, 34.6, 34.6, 34.7, 34.7, 34.8, 34.8, 34.8, 34.9, 34.9, 34.9, 34.9], //6 wickets lost
    7: [3.4, 6.2, 8.7, 10.7, 12.5, 13.9, 15.2, 16.2, 17.1, 17.9, 18.5, 19.0, 19.5, 19.9, 20.2, 20.5, 20.7, 20.9, 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.6, 21.7, 21.7, 21.8, 21.8, 21.8, 21.9, 21.9, 21.9, 21.9, 21.9, 21.9, 21.9, 21.9, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0, 22.0], //7 wickets lost
    8: [3.2, 5.5, 7.2, 8.4, 9.4, 10.1, 10.5, 10.9, 11.2, 11.4, 11.5, 11.6, 11.7, 11.8, 11.8, 11.8, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9, 11.9], //8 wickets lost
    9: [2.5, 3.7, 4.2, 4.5, 4.6, 4.6, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7] //9 wickets lost
};

if (wicketsLost == 10 || oversRemaining == 0) {
    return 0; // If all wickets are lost or no overs are remaining, return 0
}
else if (wicketsLost >= 0 && wicketsLost <= 9 || oversRemaining > 0 || oversRemaining < 50) {
return dlsResources[wicketsLost][oversRemaining]; // Returns the resource percentage based on wickets lost and overs remaining
}
}

function getDLS() {
    //This function calculates the target score for the chasing team in a rain-affected limited overs match with the DLS (Duckworth-Lewis-Stern) method
    var output = document.getElementById("output"); // The output element to display the target score
    if (document.getElementById("case1")) { //if the button for case 1 clicked
    var oversAvailTeam1 = parseInt(prompt("Overs available to Team 1: ")); //Collecting the overs available to Team 1
    var oversRemainAt1 = parseInt(prompt("Overs remaining at the time of interruption to Team 1: ")); //Getting overs remaining at time of interruption to Team 1
    var wicketsLost = parseInt(prompt("Wickets lost by Team 1: ")); //Getting wickets lost by Team 1
    var oversRemainAfter1 = parseInt(prompt("Overs remaining after the interruption to Team 1: ")); //Getting overs remaining after the interruption to Team 1
    var runsScoredTeam1 = parseInt(prompt("Runs scored by Team 1: ")); //Getting runs scored by Team 1
    var oversAvail2 = parseInt(prompt("Overs available to Team 2: ")); //Collecting the overs available to Team 2
    var avgScore = parseInt(prompt("What's the average expected score?")); //Getting average expected score
    

    var resources1 = 100 - resources(wicketsLost, oversRemainAt1) - resources(wicketsLost, oversRemainAfter1); //The resources available to Team 1
    var resources2 = resources(wicketsLost, oversAvail2); //The resources available to Team 2

    var targetScore = 0; //Initialising the target score variable
    if (resources1 < resources2) { //Team 1 resources < Team 2 resources
        targetScore = (int) (Math.ceil(runsScoredTeam1 * (resources2 / resources1))); //Target score is calculated based on the resources available to both teams
    }
    else if (resources1 > resources2) { //Team 1 resources > Team 2 resources
        targetScore = (int) (Math.ceil(runsScoredTeam1 + (avgScore * (resources2 - resources1)/100))); //Target score is calculated based on the average expected score and the resources available to Team 2
    } else { //Team 1 resources = Team 2 resources
        targetScore = runsScoredTeam1 + 1; //Target score is equal to the runs scored by Team 1 + 1 (because you are chasing, and you have to get one more than the team batting first)
    }
    document.getElementById("targetScore").innerHTML = "Target Score for Team 2: " + targetScore; //Updating the HTML element with the target score
    output.innerHTML = "Target Score for Team 2: " + targetScore; // Displaying the target score
    }
    else if (document.getElementById("case2")) { //if the button for case 2 clicked
        var oversAvailTeam1 = parseInt(prompt("Overs available to Team 1: ")); //Collecting the overs available to Team 1
        var oversRemainAt1 = parseInt(prompt("Overs remaining at the time of interruption to Team 1: ")); //Getting overs remaining at time of interruption to Team 1
        var runsScoredTeam1 = parseInt(prompt("Runs scored by Team 1: ")); //Getting runs scored by Team 1
        var wicketsLost = parseInt(prompt("Wickets lost by Team 1: ")); //Getting wickets lost by Team 1
        var oversAvail2 = parseInt(prompt("Overs available to Team 2: ")); //Collecting the overs available to Team 2
        var avgScore = parseInt(prompt("What's the average expected score?")); //Getting average expected score
        

        var resources1 = 100 - resources(wicketsLost, oversRemainAt1); //The resources available to Team 1
        var resources2 = resources(wicketsLost, oversAvail2); //The resources available to Team 2

        var targetScore = 0; //Initialising the target score variable
        if (resources1 < resources2) { //Team 1 resources < Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 * (resources2 / resources1))); //Target score is calculated based on the resources available to both teams
        }
        else if (resources1 > resources2) { //Team 1 resources > Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 + (avgScore * (resources2 - resources1)/100))); //Target score is calculated based on the average expected score and the resources available to Team 2
        } else { //Team 1 resources = Team 2 resources
            targetScore = runsScoredTeam1 + 1; //Target score is equal to the runs scored by Team 1 + 1 (because you are chasing, and you have to get one more than the team batting first)
        }
        document.getElementById("targetScore").innerHTML = "Target Score for Team 2: " + targetScore; //Updating the HTML element with the
        output.innerHTML = "Target Score for Team 2: " + targetScore; // Displaying the target score
    }
    else if (document.getElementById("case3")) { //if the button for case 3 clicked
        var oversAvailTeam1 = parseInt(prompt("Overs available to Team 1: ")); //Collecting the overs available to Team 1
        var runsScoredTeam1 = parseInt(prompt("Runs scored by Team 1: ")); //Getting runs scored by Team 1
        var oversAvail2 = parseInt(prompt("Overs available to Team 2: ")); //Collecting the overs available to Team 2
        var avgScore = parseInt(prompt("What's the average expected score?")); //Getting average expected score
        var wicketsLost = parseInt(prompt("Wickets lost by Team 2: ")); //Getting wickets lost by Team 1

        var resources1 = 100; //The resources available to Team 1 (100% as they batted their full quota)
        var resources2 = resources(wicketsLost, oversAvail2); //The resources available to Team 2

        var targetScore = 0; //Initialising the target score variable
        if (resources1 < resources2) { //Team 1 resources < Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 * (resources2 / resources1))); //Target score is calculated based on the resources available to both teams
        }
        else if (resources1 > resources2) { //Team 1 resources > Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 + (avgScore * (resources2 - resources1)/100))); //Target score is calculated based on the average expected score and the resources available to Team 2
        } else { //Team 1 resources = Team 2 resources
            targetScore = runsScoredTeam1 + 1; //Target score is equal to the runs scored by Team 1 + 1 (because you are chasing, and you have to get one more than the team batting first)
        }
        document.getElementById("targetScore").innerHTML = "Target Score for Team 2: " + targetScore; //Updating the HTML element with the target score
        output.innerHTML = "Target Score for Team 2: " + targetScore; // Displaying the target score
    }
    else if (document.getElementById("case4")) { //if the button for case 4 clicked
        var oversAvailTeam1 = parseInt(prompt("Overs available to Team 1: ")); //Collecting the overs available to Team 1
        var runsScoredTeam1 = parseInt(prompt("Runs scored by Team 1: ")); //Getting runs scored by Team 1
        var oversAvail2 = parseInt(prompt("Overs available to Team 2: ")); //Collecting the overs available to Team 2
        var avgScore = parseInt(prompt("What's the average expected score?")); //Getting average expected score
        var wicketsLost = parseInt(prompt("Wickets lost by Team 1: ")); //Getting wickets lost by Team 1
        var resources1 = 100; //The resources available to Team 1 (100% as they batted their full quota)
        var resources2 = resources(wicketsLost, oversAvail2); //The resources available to Team 2
        var targetScore = 0; //Initialising the target score variable
        if (resources1 < resources2) { //Team 1 resources < Team 2
            targetScore = (int) (Math.ceil(runsScoredTeam1 * (resources2 / resources1))); //Target score is calculated based on the resources available to both teams
        }
        else if (resources1 > resources2) { //Team 1 resources > Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 + (avgScore * (resources2 - resources1)/100))); //Target score is calculated based on the average expected score and the resources available to Team 2
        } else { //Team 1 resources = Team 2 resources
            targetScore = runsScoredTeam1 + 1; //Target score is equal to the runs scored by Team 1 + 1 (because you are chasing, and you have to get one more than the team batting first)
        }
        document.getElementById("targetScore").innerHTML = "Target Score for Team 2: " + targetScore; //Updating the HTML element with the target score
        output.innerHTML = "Target Score for Team 2: " + targetScore; // Displaying the target score
    }
    else if (document.getElementById("case5")) {
        var oversAvailTeam1 = parseInt(prompt("Overs available to Team 1: ")); //Collecting the overs available to Team 1
        var runsScoredTeam1 = parseInt(prompt("Runs scored by Team 1: ")); //Getting runs scored by Team 1
        var oversAvail2 = parseInt(prompt("Overs available to Team 2: ")); //Collecting the overs available to Team 2
        var avgScore = parseInt(prompt("What's the average expected score?")); //Getting average expected score
        var wicketsLost = parseInt(prompt("Wickets lost by Team 1: ")); //Getting wickets lost by Team 1
        var resources1 = 100; //The resources available to Team 1 (100% as they batted their full quota)
        var resources2 = resources(wicketsLost, oversAvail2); //The resources available to Team 2
        var targetScore = 0; //Initialising the target score variable
        if (resources1 < resources2) { //Team 1 resources < Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 * (resources2 / resources1))); //Target score is calculated based on the resources available to both teams
        }
        else if (resources1 > resources2) { //Team 1 resources > Team 2 resources
            targetScore = (int) (Math.ceil(runsScoredTeam1 + (avgScore * (resources2 - resources1)/100))); //Target score is calculated based on the average expected score and the resources available to Team 2
        } else { //Team 1 resources = Team 2 resources
            targetScore = runsScoredTeam1 + 1; //Target score is equal to the runs scored by Team 1 + 1 (because you are chasing, and you have to get one more than the team batting first)
        }
        document.getElementById("targetScore").innerHTML = "Target Score for Team 2: " + targetScore; //Updating the HTML element with the target score
        output.innerHTML = "Target Score for Team 2: " + targetScore; // Displaying the target score
    }
    

}