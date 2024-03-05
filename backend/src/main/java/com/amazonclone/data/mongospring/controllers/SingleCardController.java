package com.amazonclone.data.mongospring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonclone.data.mongospring.model.SingleCard;
import com.amazonclone.data.mongospring.services.SingleCardService;

import java.util.List;

@RestController
@RequestMapping("/SingleCards")
public class SingleCardController {

    private final SingleCardService singleCardService;

    @Autowired
    public SingleCardController(SingleCardService singleCardService) {
        this.singleCardService = singleCardService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<SingleCard> getAllCardItems() {
        return singleCardService.getAllCardItems();
    }
}
