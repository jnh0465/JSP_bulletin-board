package com.ljw.bulletinboard;

import java.sql.Timestamp;

public class MemberDto {

	private String id;
	private String pw;
	private String name;
	private String age;
	private Timestamp rDate;
	private String gender;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public Timestamp getrDate() {
		return rDate;
	}

	public void setrDate(Timestamp rDate) {
		this.rDate = rDate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
}
