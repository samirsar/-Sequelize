# -Sequelize
creating below table using express js (node js framework),sequelize and mysql

```

table ItemCategory{
  id integer pk
  item_category_id varchar(255) [not null,unique]
  category_name varchar(255) 
  category_name_hindi varchar (255)
  category_image varchar(255) [not null]
  vehicle_id varchar(255)
  priority integer
  created_at datetime
	updated_at datetime
	created_by varchar(255)
	updated_by varchar(255)
	is_deleted boolean 
}

```


