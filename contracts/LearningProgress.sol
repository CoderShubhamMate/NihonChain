//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LearningProgress {
    address public admin;

    struct Lesson {
        string topic;
        bool isCompleted;
    }

    struct UserProgress {
        uint256 lessonsCompleted;
    }

    mapping(address => UserProgress) internal progress;
    mapping(address => mapping(uint256 => bool)) internal completedLessons;

    event LessonCompleted(address indexed user, uint256 lessonId);
    event BadgeAwarded(address indexed user, string badge);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function completeLesson(uint256 lessonId) public {
        require(!completedLessons[msg.sender][lessonId], "Already completed");

        completedLessons[msg.sender][lessonId] = true;
        progress[msg.sender].lessonsCompleted++;

        emit LessonCompleted(msg.sender, lessonId);

        if (progress[msg.sender].lessonsCompleted % 5 == 0) {
            emit BadgeAwarded(msg.sender, "Milestone Badge");
        }
    }
    function hasCompletedLesson(address user, uint256 lessonId) public view returns (bool) {
        return completedLessons[user][lessonId];
    }

    function getLessonsCompleted(address user) public view returns (uint256) {
        return progress[user].lessonsCompleted;
    }
}