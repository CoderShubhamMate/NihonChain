// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NihonChain {
    struct User {
        address userAddress;
        string name;
        uint256 learningProgress;
        uint256 badgesEarned;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string name);
    event ProgressUpdated(address indexed userAddress, uint256 progress);
    event BadgeEarned(address indexed userAddress, uint256 badgeId);

    function registerUser(string memory _name) public {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        users[msg.sender] = User(msg.sender, _name, 0, 0);
        emit UserRegistered(msg.sender, _name);
    }

    function updateProgress(uint256 _progress) public {
        require(users[msg.sender].userAddress != address(0), "User not registered");
        users[msg.sender].learningProgress = _progress;
        emit ProgressUpdated(msg.sender, _progress);
    }

    function earnBadge(uint256 _badgeId) public {
        require(users[msg.sender].userAddress != address(0), "User not registered");
        users[msg.sender].badgesEarned += 1;
        emit BadgeEarned(msg.sender, _badgeId);
    }

    function getUserData(address _userAddress) public view returns (User memory) {
        return users[_userAddress];
    }
}