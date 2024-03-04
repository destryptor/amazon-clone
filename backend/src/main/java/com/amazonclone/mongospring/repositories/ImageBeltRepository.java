package com.amazonclone.mongospring.repositories;

import com.amazonclone.mongospring.model.ImageBelt;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImageBeltRepository extends MongoRepository<ImageBelt, String> {
}
