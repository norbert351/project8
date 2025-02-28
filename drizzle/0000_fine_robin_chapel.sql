CREATE TABLE `contact` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`remark` varchar(255) NOT NULL,
	CONSTRAINT `contact_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `login` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `login_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product` varchar(255) NOT NULL,
	`qtity` int NOT NULL,
	`desc` varchar(255) NOT NULL,
	`price` int NOT NULL,
	CONSTRAINT `product_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `register` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstname` varchar(255) NOT NULL,
	`lastname` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`confirmPassword` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `register_id` PRIMARY KEY(`id`),
	CONSTRAINT `register_email_unique` UNIQUE(`email`)
);
