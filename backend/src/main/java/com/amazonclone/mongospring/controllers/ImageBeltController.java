package com.amazonclone.mongospring.controllers;

import com.amazonclone.mongospring.model.ImageBelt;
import com.amazonclone.mongospring.services.ImageBeltService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ImageBelts")
public class ImageBeltController {

    private final ImageBeltService imageBeltService;

    @Autowired
    public ImageBeltController(ImageBeltService imageBeltService) {
        this.imageBeltService = imageBeltService;
    }

    @GetMapping
    public List<ImageBelt> getAllImageBelts() {
        return imageBeltService.getAllImageBelts();
    }
}
