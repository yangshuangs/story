CREATE TABLE IF NOT EXISTS t_session (
  id int(11) unsigned not null auto_increment primary key,
  session varchar(32) NOT NULL UNIQUE,
  session_key varchar(24) NOT NULL,
  openid varchar(32) NOT NULL,
  last_active_datetime datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS t_user(
  id int(11) unsigned not null auto_increment primary key,
  openid varchar(32) NOT NULL UNIQUE,
  nickname varchar(32) NOT NULL,
  avatar_url varchar(200) NOT NULL,
  gender int(11) NOT NULL,
  city varchar(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS t_category (
  id int(11) unsigned not null auto_increment primary key,
  name varchar(32) NOT NULL,
  brief text NOT NULL,
  picture varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS t_story (
  id int(11) unsigned not null auto_increment primary key,
  name varchar(32) NOT NULL,
  content text NOT NULL,
  picture varchar(32) NOT NULL,
  mp3 varchar(50) NOT NULL,
  categotyid int(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS t_collect (
   id int(11) unsigned not null auto_increment primary key,
  storyid int(11) NOT NULL ,
  openid int(11) NOT NULL
) 