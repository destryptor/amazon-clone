package com.amazonclone.mongospring.controllers;

import com.amazonclone.mongospring.model.PriceCard;
import com.amazonclone.mongospring.services.PriceCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/PriceCards")
public class PriceCardController {

    private final PriceCardService priceCardService;

    @Autowired
    public PriceCardController(PriceCardService priceCardService) {
        this.priceCardService = priceCardService;
    }

    @GetMapping
    public List<PriceCard> getAllPriceCards() {
        return priceCardService.getAllPriceCards();
    }
}
