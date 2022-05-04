package app.bootcamp.atm.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "acct_details")
public class AccountUser implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private int id;
	@Column(nullable = false, updatable = false)
	private String accountNo;
	@Column(nullable = false)
	private int pinCode;
	private double balance;
	
	public AccountUser() {
	}
	
	public AccountUser(int id, String accountNo, int pinCode, double balance) {

		this.id = id;
		this.accountNo = accountNo;
		this.pinCode = pinCode;
		this.balance = balance;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "AccountUser [id=" + id + ", accountNo=" + accountNo + ", pinCode=" + pinCode + ", balance=" + balance
				+ "]";
	}
	
	
	
}
