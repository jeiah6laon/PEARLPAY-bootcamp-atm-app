package app.bootcamp.atm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import app.bootcamp.atm.model.AccountUser;
import app.bootcamp.atm.repository.UserRepository;



@RestController
@RequestMapping ("/")
public class UserController {



	    @Autowired
	    private UserRepository repo;
	    @GetMapping
	    public String check() {
	    	return "welcome";
	    }
	    
	    @GetMapping ("/getusers")
	    public List < AccountUser > getUsers() {
	        return repo.findAll();
	    }
	
	    @GetMapping ("/getusers/{id}")
	    public AccountUser getUser(@PathVariable("id") int id) {
	    	return repo.findById(id);
	    }
 
//https://stackoverflow.com/questions/33795812/how-to-pass-a-value-from-angularjs-to-spring-rest-controller


}