module.exports = {
    "up": "CREATE TABLE `people` (`id` int(11) NOT NULL AUTO_INCREMENT,`name` varchar(255) DEFAULT NULL,PRIMARY KEY (`id`))",
    "down": "DELETE TABLE people"
}