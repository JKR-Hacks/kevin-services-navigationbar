const mockTeamData = [
  {
    id: 1, team_name: 'Arizona Cardinals', division: 'NFC WEST', wins: 7, losses: 9, tie: 0, percentage: 0.437, points_for: 379, points_against: 399,
  },
  {
    id: 2, team_name: 'Atlanta Falcons', division: 'NFC SOUTH', wins: 7, losses: 9, tie: 0, percentage: 0.437, points_for: 381, points_against: 404,
  },
  {
    id: 3, team_name: 'Baltimore Ravens', division: 'AFC NORTH', wins: 11, losses: 5, tie: 0, percentage: 0.687, points_for: 341, points_against: 293,
  },
  {
    id: 4, team_name: 'Buffalo Bills', division: 'AFC EAST', wins: 3, losses: 13, tie: 0, percentage: 0.187, points_for: 288, points_against: 428,
  },
  {
    id: 5, team_name: 'Carolina Panthers', division: 'NFC SOUTH', wins: 9, losses: 7, tie: 0, percentage: 0.562, points_for: 424, points_against: 430,
  },
  {
    id: 6, team_name: 'Chicago Bears', division: 'NFC NORTH', wins: 13, losses: 3, tie: 0, percentage: 0.812, points_for: 445, points_against: 381,
  },
  {
    id: 7, team_name: 'Cincinnati Bengals', division: 'AFC NORTH', wins: 9, losses: 7, tie: 1, percentage: 0.562, points_for: 488, points_against: 461,
  },
  {
    id: 8, team_name: 'Cleveland Browns', division: 'AFC NORTH', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 399, points_against: 372,
  },
  {
    id: 9, team_name: 'Dallas Cowboys', division: 'NFC EAST', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 511, points_against: 465,
  },
  {
    id: 10, team_name: 'Denver Broncos', division: 'AFC WEST', wins: 8, losses: 7, tie: 1, percentage: 0.531, points_for: 476, points_against: 479,
  },
  {
    id: 11, team_name: 'Detroit Lions', division: 'NFC NORTH', wins: 14, losses: 2, tie: 0, percentage: 0.875, points_for: 563, points_against: 505,
  },
  {
    id: 12, team_name: 'Green Bay Packers', division: 'NFC NORTH', wins: 11, losses: 5, tie: 0, percentage: 0.687, points_for: 577, points_against: 515,
  },
  {
    id: 13, team_name: 'Houston Texans', division: 'AFC SOUTH', wins: 11, losses: 5, tie: 0, percentage: 0.687, points_for: 573, points_against: 489,
  },
  {
    id: 14, team_name: 'Indianapolis Colts', division: 'AFC SOUTH', wins: 3, losses: 13, tie: 0, percentage: 0.187, points_for: 325, points_against: 412,
  },
  {
    id: 15, team_name: 'Jacksonville Jaguars', division: 'AFC SOUTH', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 419, points_against: 466,
  },
  {
    id: 16, team_name: 'Kansas City Chiefs', division: 'AFC WEST', wins: 13, losses: 3, tie: 0, percentage: 0.812, points_for: 516, points_against: 310,
  },
  {
    id: 17, team_name: 'Los Angeles Rams', division: 'NFC WEST', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 523, points_against: 319,
  },
  {
    id: 18, team_name: 'Miami Dolphins', division: 'AFC EAST', wins: 6, losses: 10, tie: 0, percentage: 0.375, points_for: 421, points_against: 516,
  },
  {
    id: 19, team_name: 'Minnesota Vikings', division: 'NFC NORTH', wins: 4, losses: 12, tie: 0, percentage: 0.250, points_for: 369, points_against: 568,
  },
  {
    id: 20, team_name: 'New England Patriots', division: 'AFC EAST', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 518, points_against: 546,
  },
  {
    id: 21, team_name: 'New Orleans Saints', division: 'NFC SOUTH', wins: 10, losses: 6, tie: 0, percentage: 0.625, points_for: 415, points_against: 378,
  },
  {
    id: 22, team_name: 'New York Giants', division: 'NFC EAST', wins: 5, losses: 11, tie: 0, percentage: 0.312, points_for: 333, points_against: 476,
  },
  {
    id: 23, team_name: 'New York Jets', division: 'AFC EAST', wins: 6, losses: 10, tie: 0, percentage: 0.375, points_for: 344, points_against: 499,
  },
  {
    id: 24, team_name: 'Oakland Raiders', division: 'AFC WEST', wins: 10, losses: 6, tie: 0, percentage: 0.625, points_for: 386, points_against: 371,
  },
  {
    id: 25, team_name: 'Philadelphia Eagles', division: 'NFC EAST', wins: 2, losses: 14, tie: 0, percentage: 0.125, points_for: 333, points_against: 657,
  },
  {
    id: 26, team_name: 'Pittsburgh Steelers', division: 'AFC NORTH', wins: 10, losses: 6, tie: 0, percentage: 0.625, points_for: 526, points_against: 445,
  },
  {
    id: 27, team_name: 'Los Angeles Chargers', division: 'AFC WEST', wins: 10, losses: 5, tie: 1, percentage: 0.656, points_for: 462, points_against: 417,
  },
  {
    id: 28, team_name: 'San Francisco 49ers', division: 'NFC WEST', wins: 8, losses: 8, tie: 0, percentage: 0.500, points_for: 436, points_against: 464,
  },
  {
    id: 29, team_name: 'Seattle Seahawks', division: 'NFC WEST', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 549, points_against: 474,
  },
  {
    id: 30, team_name: 'Tampa Bay Buccaneers', division: 'NFC SOUTH', wins: 12, losses: 4, tie: 0, percentage: 0.750, points_for: 617, points_against: 499,
  },
  {
    id: 31, team_name: 'Tennessee Titans', division: 'AFC SOUTH', wins: 3, losses: 13, tie: 0, percentage: 0.187, points_for: 237, points_against: 591,
  },
  {
    id: 32, team_name: 'Washington Redskins', division: 'NFC EAST', wins: 7, losses: 9, tie: 0, percentage: 0.437, points_for: 394, points_against: 435,
  },
];


export default mockTeamData;
