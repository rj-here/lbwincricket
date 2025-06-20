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