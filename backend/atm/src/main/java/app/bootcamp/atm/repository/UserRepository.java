package app.bootcamp.atm.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import app.bootcamp.atm.model.AccountUser;

@CrossOrigin (origins = "http://localhost:8080")
@Repository
public interface UserRepository extends JpaRepository <AccountUser, Integer>{
//jpa or crud repo???
	
	
@Override
List<AccountUser> findAll();

AccountUser findById(int id);

}
