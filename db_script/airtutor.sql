-- SELECT `id`, `name`, `mobile`, `state_id`, `district_id`, `area`, `streetAddress`, `createdAt`, `updatedAt`, `created_at`, `updated_at`, `deleted_at`
-- FROM `user_detail` AS `user_detail`
-- WHERE ((`user_detail`.`deleted_at` > '2018-09-23 17:28:12.013 +00:00' OR `user_detail`.`deleted_at` IS NULL)
-- AND `user_detail`.`id` = '2') LIMIT 1;

-- INSERT INTO 'user_detail` (`id`, `name`, `mobile`, `state_id`, `district_id`, `area`, `streetAddress`, `createdAt`, `updatedAt`, `created_at`, `updated_at`, `deleted_at` )
-- FROM `user_detail` AS `user_detail`
-- WHERE ((`user_detail`.`deleted_at` > '2018-09-23 17:28:12.013 +00:00' OR `user_detail`.`deleted_at` IS NULL) AND `user_detail`.`id`
-- = '2') LIMIT 1;


SELECT `id`, `name`, `mobile`, `state_id`, `district_id`, `area`, `streetAddress`, `created_at`, `updated_at`, `deleted_at`
FROM `user_detail` AS `user_detail`
WHERE ((`user_detail`.`deleted_at` > '2018-09-23 17:33:45.484 +00:00'
OR `user_detail`.`deleted_at` IS NULL) AND `user_detail`.`id` = '2') LIMIT 1;

INSERT INTO user_detail (`name`, `mobile`, `state_id`, `district_id`, `area`, `streetAddress`, `created_at`, `updated_at`, `deleted_at`)
VALUES ('Ashutosh Tripathy', 9867917163, 35, 34, 'cv raman nagar', '3b classik retreat, 29b cross',  )

