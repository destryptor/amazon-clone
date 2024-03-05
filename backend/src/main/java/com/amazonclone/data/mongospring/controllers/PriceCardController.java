package com.amazonclone.data.mongospring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonclone.data.mongospring.model.PriceCard;
import com.amazonclone.data.mongospring.services.PriceCardService;

import java.util.List;

@RestController
@RequestMapping("/PriceCards")
public class PriceCardController {

    private final PriceCardService priceCardService;

    @Autowired
    public PriceCardController(PriceCardService priceCardService) {
        this.priceCardService = priceCardService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<PriceCard> getAllPriceCards() {
        return priceCardService.getAllPriceCards();
    }
}
